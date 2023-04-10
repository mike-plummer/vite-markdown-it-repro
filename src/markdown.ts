import MarkdownIt from 'markdown-it'

export function getMarkupFromMarkdown() {
    const markdown = new MarkdownIt()

    return markdown.render('# Markdown Content')
}
