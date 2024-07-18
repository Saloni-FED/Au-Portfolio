// firebaseUtils.js
import { db } from './firebaseConfig';
import { collection, query, orderBy, getDocs } from 'firebase/firestore';

const fetchLatestBlogs = async () => {
  try {
    const blogsRef = collection(db, 'blogs');
    const q = query(blogsRef, orderBy('createdAt', 'desc')); // Assuming you have a 'timestamp' field in your blogs
    const querySnapshot = await getDocs(q);
    
    const blogs = [];
    querySnapshot.forEach((doc) => {
      blogs.push({ id: doc.id, ...doc.data() });
    });

    console.log(blogs)
    return blogs;
  } catch (error) {
    console.error('Error fetching blogs:', error);
    throw error;
  }
};

export { fetchLatestBlogs };
