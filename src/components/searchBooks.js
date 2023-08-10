import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useFormik } from 'formik'
import * as Yup from 'yup'
import '../App'
import {FaSearch} from 'react-icons/fa'
import CardHome from './cardHome'

function SearchBooks() {

    //setting search input
    const [search, setSearch] = useState("");
    const [bookData, setData] = useState([]);

    const apiKey = process.env.REACT_APP_API_KEY
    const url = `https://www.googleapis.com/books/v1/volumes?q=${search}&key=${apiKey}&maxResults=40`

    const searchBook = (event) => {
        if (event.key === "Enter") {
            axios.get(url)
            .then(res => setData(res.data.items))
            .catch(err => console.log(err))
        }
    }

    //setting form
  const Navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      title: "",
      author: "",
      description: "",
      terms: "",
    },
    validationSchema: Yup.object({
      title: Yup.string().required("Title is required"),
      author: Yup.string().required("Author is required"),
      description: Yup.string().min(30, "Description must be 20 characters or more").required("Description is required"),
      terms: Yup.array().required("Terms must be checked"),      
    }),
    onSubmit: (values) => {
      console.log(values);
      Navigate('/success', { replace: true});

    }
  })

    return (
        <div className=' w-full flex flex-col justify-center items-center m-2'>
            <section className='my-9'>
              <button className='cursor-pointer hover:scale-95'>
                <Link className='bg-[#0E2954] text-white uppercase text-2xl p-9' to="/books">Open Books Catalog</Link>            
              </button>                    
            </section>
            
            <section>
                <div className='bg-[#c6c9ca] flex items-center justify-center flex-col p-4 m-10'>
                  <div className='p-5 text-center'>
                    <h1 className='text-[#0E2954] pb-5 text-2xl'>Would you like to select certain books for display in the Catalog section?</h1>
                    <p className='text-[#0E2954] text-xl'>Simply input the data into the form, and it will be included.</p>
                  </div>

                  <form className='flex items-center justify-center flex-col py-5' onSubmit={formik.handleSubmit}>

                    <label className={`p-2 ${formik.touched.title && formik.errors.title ? 'text-red-400' : ''}`} htmlFor="title">{formik.touched.title && formik.errors.title ? formik.errors.title : "Title:"}</label>
                    <input className='p-1' type="text" name="title" placeholder="Enter the book's name"
                    value={formik.values.title} onChange={formik.handleChange} onBlur={formik.handleBlur}/>

                    <label className={`p-2 ${formik.touched.author && formik.errors.author ? 'text-red-400' : ''}`} htmlFor="author">{formik.touched.author && formik.errors.author ? formik.errors.author : "Author:"}</label>
                    <input className='p-1' type="text" name="author" placeholder="Enter the author's name" value={formik.values.author} onChange={formik.handleChange} onBlur={formik.handleBlur}/>

                    <label className={`p-2 ${formik.touched.description && formik.errors.description ? 'text-red-400' : ''}`} htmlFor="description">{formik.touched.description && formik.errors.description ? formik.errors.description : "Description:"}</label>
                    <textarea className='p-1 text-black' name="description" cols="30" rows="7" placeholder="Enter the book's description" value={formik.values.description} onChange={formik.handleChange} onBlur={formik.handleBlur}></textarea>

                    <label className={`mt-8 ${formik.touched.terms && formik.errors.terms ? 'text-red-400' : ''}`} htmlFor="terms">{formik.touched.terms && formik.errors.terms ? formik.errors.terms : ""}</label>
                    <div className='flex items-center'>
                      <input type="checkbox" name="terms" value="checked" className='h-4 w-4 mr-2' onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                      <p>I consent to including this data in the catalog.</p>
                    </div>

                    <button type='submit' className='bg-[#172a48] text-white mt-5 w-full h-10'>Send</button>
                  </form>
                </div>

                <div className='text-center min-h-96 p-5'>
                    <h1 className='text-[#0E2954] text-2xl mt-9 p-5'>Use this search function if you've misplaced the book's information</h1>
                    <div className='flex align-center justify-center'>
                        <input type="text" name="search" className="bg-[#e8e8e8] h-35 p-2 outline-0 border-0" placeholder='Enter your book name' value={search} onChange={e=>setSearch(e.target.value)} onKeyDown={searchBook} />
                        <button className="bg-[#b8b5b5] text-white h-35 font-bold p-2 outline-none border-none" onClick={searchBook}>
                            <FaSearch/>
                        </button>
                    </div>
                    <div className='cardSection'>
                        {
                            <CardHome book={bookData} />
                        }
                    </div>
                </div>
            </section>
        </div>
    )
}

export default SearchBooks