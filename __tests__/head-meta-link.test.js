const fs = require("fs");
const path = require("path");
const { JSDOM } = require("jsdom");

const filePath = path.resolve(__dirname, "../student-code/index.html");
const html = fs.readFileSync(filePath, "utf8");
const { document } = new JSDOM(html).window;

describe("Unit 01 - Lesson 2: Meta and Link Tags", () => {
  const head = document.querySelector("head");

  test("contains <meta charset='UTF-8'> tag", () => {
    const metaCharset = head.querySelector("meta[charset='UTF-8']");
    expect(metaCharset).not.toBeNull();
  });

  test("contains <meta name='description'> with content", () => {
    const metaDesc = head.querySelector("meta[name='description']");
    expect(metaDesc).not.toBeNull();
    expect(metaDesc.getAttribute("content")).toMatch(/.+/);
  });

  test("contains <meta name='keywords'> with at least one keyword", () => {
    const metaKeywords = head.querySelector("meta[name='keywords']");
    expect(metaKeywords).not.toBeNull();
    const content = metaKeywords.getAttribute("content");
    expect(content).toMatch(/,/);
  });

  test("contains <link rel='stylesheet'> with .css href", () => {
    const link = head.querySelector("link[rel='stylesheet']");
    expect(link).not.toBeNull();
    const href = link.getAttribute("href");
    expect(href.endsWith(".css")).toBe(true);
  });

  test("all meta and link tags are inside <head>", () => {
    const allMeta = document.querySelectorAll("meta");
    const allLinks = document.querySelectorAll("link[rel='stylesheet']");
    allMeta.forEach(tag => {
      expect(head.contains(tag)).toBe(true);
    });
    allLinks.forEach(tag => {
      expect(head.contains(tag)).toBe(true);
    });
  });

  test("meta and link tags are self-closing (via raw HTML check)", () => {
    expect(html).toMatch(/<meta[^>]*\/>/i);
    expect(html).toMatch(/<link[^>]*\/>/i);
  });
});
