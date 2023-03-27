import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { useNavigate } from "react-router-dom";

const BlogDetails = () => {
    const { id } = useParams();
    const { data: blog, isLoading, error } = useFetch('http://localhost:8000/blogs/' + id);
    const navigate = useNavigate();

    const handleDelete = () => {
        fetch('http://localhost:8000/blogs/' + blog.id, {
            method: 'DELETE'
        }).then(() => {
            navigate('/');
        })
    }

    return (
        <div className="blog-detials">
            {error && <div>{error}</div>}
            {isLoading && <div className="loading"><p>Loading . . .</p></div>}
            {blog && (
                <article>
                    <div className="delete-button">
                        <a onClick={() => handleDelete()}>Delete Blog</a>
                    </div>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                    <div>
                        {blog.body}
                    </div>
                </article>
            )}
        </div>
    );
}

export default BlogDetails;