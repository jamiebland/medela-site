"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Link from "@tiptap/extension-link";
import Image from "@tiptap/extension-image";
import { useState, useCallback, useEffect, useRef } from "react";
import TurndownService from "turndown";
import { marked } from "marked";

const turndown = new TurndownService({
  headingStyle: "atx",
  bulletListMarker: "-",
  codeBlockStyle: "fenced",
});

function mdToHtml(md: string): string {
  return marked.parse(md, { async: false }) as string;
}

function htmlToMd(html: string): string {
  return turndown.turndown(html);
}

interface RichEditorProps {
  value: string;
  onChange: (md: string) => void;
}

function ToolbarButton({
  active,
  onClick,
  children,
  title,
}: {
  active?: boolean;
  onClick: () => void;
  children: React.ReactNode;
  title: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      title={title}
      className={`px-2 py-1.5 rounded text-sm font-medium transition-colors cursor-pointer ${
        active
          ? "bg-[#1e3a6e] text-white"
          : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
      }`}
    >
      {children}
    </button>
  );
}

function Toolbar({ editor }: { editor: ReturnType<typeof useEditor> }) {
  if (!editor) return null;

  function addLink() {
    const url = prompt("Enter URL:");
    if (url) {
      editor!.chain().focus().setLink({ href: url }).run();
    }
  }

  function addImage() {
    const url = prompt("Enter image URL:");
    if (url) {
      editor!.chain().focus().setImage({ src: url }).run();
    }
  }

  return (
    <div className="flex items-center gap-0.5 flex-wrap px-3 py-2 border-b border-gray-200 bg-gray-50/50">
      <ToolbarButton
        active={editor.isActive("bold")}
        onClick={() => editor.chain().focus().toggleBold().run()}
        title="Bold"
      >
        <strong>B</strong>
      </ToolbarButton>
      <ToolbarButton
        active={editor.isActive("italic")}
        onClick={() => editor.chain().focus().toggleItalic().run()}
        title="Italic"
      >
        <em>I</em>
      </ToolbarButton>
      <ToolbarButton
        active={editor.isActive("strike")}
        onClick={() => editor.chain().focus().toggleStrike().run()}
        title="Strikethrough"
      >
        <s>S</s>
      </ToolbarButton>

      <div className="w-px h-5 bg-gray-200 mx-1" />

      <ToolbarButton
        active={editor.isActive("heading", { level: 2 })}
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        title="Heading 2"
      >
        H2
      </ToolbarButton>
      <ToolbarButton
        active={editor.isActive("heading", { level: 3 })}
        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
        title="Heading 3"
      >
        H3
      </ToolbarButton>

      <div className="w-px h-5 bg-gray-200 mx-1" />

      <ToolbarButton
        active={editor.isActive("bulletList")}
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        title="Bullet list"
      >
        &bull; List
      </ToolbarButton>
      <ToolbarButton
        active={editor.isActive("orderedList")}
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        title="Numbered list"
      >
        1. List
      </ToolbarButton>

      <div className="w-px h-5 bg-gray-200 mx-1" />

      <ToolbarButton
        active={editor.isActive("blockquote")}
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
        title="Blockquote"
      >
        &ldquo; Quote
      </ToolbarButton>
      <ToolbarButton
        active={editor.isActive("codeBlock")}
        onClick={() => editor.chain().focus().toggleCodeBlock().run()}
        title="Code block"
      >
        {"</>"}
      </ToolbarButton>

      <div className="w-px h-5 bg-gray-200 mx-1" />

      <ToolbarButton
        active={editor.isActive("link")}
        onClick={addLink}
        title="Add link"
      >
        Link
      </ToolbarButton>
      <ToolbarButton onClick={addImage} title="Add image">
        Image
      </ToolbarButton>

      <div className="w-px h-5 bg-gray-200 mx-1" />

      <ToolbarButton
        onClick={() => editor.chain().focus().setHorizontalRule().run()}
        title="Horizontal rule"
      >
        &mdash;
      </ToolbarButton>
    </div>
  );
}

export default function RichEditor({ value, onChange }: RichEditorProps) {
  const [mode, setMode] = useState<"visual" | "markdown">("visual");
  const [mdValue, setMdValue] = useState(value);
  const suppressUpdate = useRef(false);

  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: { levels: [2, 3, 4] },
      }),
      Link.configure({
        openOnClick: false,
        HTMLAttributes: { class: "text-[#1e3a6e] underline" },
      }),
      Image.configure({
        inline: false,
        HTMLAttributes: { class: "rounded-lg max-w-full" },
      }),
    ],
    content: mdToHtml(value),
    editorProps: {
      attributes: {
        class: "prose prose-sm max-w-none outline-none min-h-[400px] px-4 py-3",
      },
    },
    onUpdate: ({ editor }) => {
      if (suppressUpdate.current) return;
      const md = htmlToMd(editor.getHTML());
      setMdValue(md);
      onChange(md);
    },
  });

  // Sync external value changes into editor (e.g. initial load)
  const initialSet = useRef(false);
  useEffect(() => {
    if (!initialSet.current && editor && value) {
      suppressUpdate.current = true;
      editor.commands.setContent(mdToHtml(value));
      setMdValue(value);
      suppressUpdate.current = false;
      initialSet.current = true;
    }
  }, [editor, value]);

  const switchToVisual = useCallback(() => {
    if (editor) {
      suppressUpdate.current = true;
      editor.commands.setContent(mdToHtml(mdValue));
      suppressUpdate.current = false;
    }
    setMode("visual");
  }, [editor, mdValue]);

  const switchToMarkdown = useCallback(() => {
    if (editor) {
      const md = htmlToMd(editor.getHTML());
      setMdValue(md);
    }
    setMode("markdown");
  }, [editor]);

  function handleMdChange(newMd: string) {
    setMdValue(newMd);
    onChange(newMd);
  }

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
      {/* Header with mode toggle */}
      <div className="flex items-center justify-between px-4 py-2.5 border-b border-gray-200">
        <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
          Content
        </span>
        <div className="flex items-center bg-gray-100 rounded-lg p-0.5">
          <button
            type="button"
            onClick={switchToVisual}
            className={`px-3 py-1 rounded-md text-xs font-semibold transition-colors cursor-pointer ${
              mode === "visual"
                ? "bg-white text-gray-900 shadow-sm"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            Visual
          </button>
          <button
            type="button"
            onClick={switchToMarkdown}
            className={`px-3 py-1 rounded-md text-xs font-semibold transition-colors cursor-pointer ${
              mode === "markdown"
                ? "bg-white text-gray-900 shadow-sm"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            Markdown
          </button>
        </div>
      </div>

      {mode === "visual" ? (
        <>
          <Toolbar editor={editor} />
          <EditorContent editor={editor} />
        </>
      ) : (
        <textarea
          value={mdValue}
          onChange={(e) => handleMdChange(e.target.value)}
          placeholder={"### Your heading here\n\nStart writing in Markdown..."}
          className="w-full min-h-[400px] px-4 py-3 text-sm text-gray-900 font-mono leading-relaxed resize-y outline-none border-0 placeholder:text-gray-300"
        />
      )}
    </div>
  );
}
