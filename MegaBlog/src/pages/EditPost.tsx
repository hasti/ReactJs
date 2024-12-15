import  {useEffect, useState} from 'react'
import {Container, PostForm} from '../components'
import appwriteService from "../appwrite/config";
import { useNavigate,  useParams } from 'react-router-dom';

type Post = {
    $id: string;
    title: string;
    featuredImage: string;
    content: string;
};

function EditPost() {
    const [post, setPosts] = useState<Post | null>(null)
    const {slug} = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        if (slug) {
            appwriteService.getPost(slug).then((post) => {
                if (post) {
                    setPosts({
                        $id: post.$id,
                        title: post.title,
                        featuredImage: post.featuredImage,
                        content: post.content,
                    })
                }
            })
        } else {
            navigate('/')
        }
    }, [slug, navigate])
  return post ? (
    <div className='py-8'>
        <Container>
            <PostForm post={post} />
        </Container>
    </div>
  ) : null
}

export default EditPost