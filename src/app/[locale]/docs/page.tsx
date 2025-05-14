import { readdirSync } from "fs";
import path from "path";

export default function DocsIndex() {
  const docsDir = path.join(process.cwd(), "src", "mdx", "docs");
  const files = readdirSync(docsDir).filter((f) => f.endsWith(".mdx"));

  return (
    <ul className="space-y-2">
      {files.map((file) => (
        <li key={file}>
          <a
            href={`/docs/${file.replace(/\.mdx$/, "")}`}
            className="text-primary hover:underline"
          >
            {file.replace(/\.mdx$/, "")}
          </a>
        </li>
      ))}
    </ul>
  );
}
