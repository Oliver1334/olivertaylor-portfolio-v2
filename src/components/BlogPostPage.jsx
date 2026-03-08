import { useParams } from "react-router-dom";
import { blogPosts } from "../blogPosts/posts";


export const BlogPostPage = () => {
    const { slug } = useParams();
    const post = blogPosts.find(p => p.slug === slug);

    if (!post) return <p>Post not found!</p>

    const PostContent = post.component;
    return <PostContent />


}


