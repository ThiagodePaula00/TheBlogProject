import Reactmarkdown from 'react-markdown'
import rehypeSanitize from 'rehype-sanitize';
import remarkGfm from 'remark-gfm';


type SafeMarkdownProps = {
    markdown: string
};

export function SafeMarkdown({markdown}: SafeMarkdownProps) {
    return <div>
        <Reactmarkdown rehypePlugins={[rehypeSanitize]} remarkPlugins={[ remarkGfm ]} >{markdown}</Reactmarkdown>
    </div>;
}