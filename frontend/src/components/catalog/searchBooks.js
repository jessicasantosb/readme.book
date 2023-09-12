import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useFormik } from 'formik'
import * as Yup from 'yup'
import {FaSearch} from 'react-icons/fa'
import CardsSearch from './cardsSearch'

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
        <section className='mx-5 mt-24 mb-12'>
          <div className='flex flex-col items-center justify-center'>
            <h2 className='text-[#512B81] text-3xl pb-5 text-center'>Would you like to select certain books for display in the Catalog section?</h2>
            <p className='text-xl py-5 text-center'>Simply <span className='text-[#512B81]'>input </span> the data into the form, and it will be <span className='text-[#512B81]'>inclued</span>.</p>
          
            <form className='shadow-lg shadow-[#8CABFF] max-w-[600px] flex items-center justify-center flex-col py-5 p-4 rounded-xl' onSubmit={formik.handleSubmit}>

              <label className={`p-2 text-[#512B81] ${formik.touched.title && formik.errors.title ? 'text-red-400' : ''}`} htmlFor="title">{formik.touched.title && formik.errors.title ? formik.errors.title : "Title:"}</label>
              <input className='border border-[#8CABFF] rounded-xl text-[#35155D] p-1' type="text" name="title" placeholder="Enter the book's name"
              value={formik.values.title} onChange={formik.handleChange} onBlur={formik.handleBlur}/>

              <label className={`p-2 text-[#512B81] ${formik.touched.author && formik.errors.author ? 'text-red-400' : ''}`} htmlFor="author">{formik.touched.author && formik.errors.author ? formik.errors.author : "Author:"}</label>
              <input className='border border-[#8CABFF] rounded-xl text-[#35155D] p-1' type="text" name="author" placeholder="Enter the author's name" value={formik.values.author} onChange={formik.handleChange} onBlur={formik.handleBlur}/>

              <label className={`p-2 text-[#512B81] ${formik.touched.description && formik.errors.description ? 'text-red-400' : ''}`} htmlFor="description">{formik.touched.description && formik.errors.description ? formik.errors.description : "Description:"}</label>
              <textarea className='border border-[#8CABFF] rounded-xl text-[#35155D] p-1' name="description" cols="30" rows="7" placeholder="Enter the book's description" value={formik.values.description} onChange={formik.handleChange} onBlur={formik.handleBlur}></textarea>

              <label className={`mt-8 text-[#512B81] ${formik.touched.terms && formik.errors.terms ? 'text-red-400' : ''}`} htmlFor="terms">{formik.touched.terms && formik.errors.terms ? formik.errors.terms : ""}</label>
              <div className='flex items-center'>
                <input type="checkbox" name="terms" value="checked" className='h-4 w-4 mr-2' onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                <p className='text-[#512B81]'>I consent to including this data in the catalog.</p>
              </div>
                <button type='submit' className='h-12 w-full cursor-pointer bg-[#4477CE] text-white rounded-xl hover:scale-95 active:bg-[#8CABFF] my-9 mr-5'>Send</button>
            </form>
          </div>

          <div className='mx-5 mt-24 mb-12'>
            <h2 className='text-xl pb-5 text-center'>Use this  <span className='text-[#512B81]'>search function </span> if you've misplaced the <span className='text-[#512B81]'>book's </span> information</h2>
            <div className='flex align-center justify-center'>
              <input type="text" name="search" className="border border-[#4477CE] text-[#512B81] h-35 p-2 outline-0 rounded-l-lg" placeholder='Enter your book name' value={search} onChange={e=>setSearch(e.target.value)} onKeyDown={searchBook} />
              <button className="bg-[#4477CE] text-white h-35 font-bold p-2 rounded-r-lg" onClick={searchBook}>
                  <FaSearch/>
              </button>
            </div>
            <div className='grid grid-cols-fit gap-2 my-9 '>
                {
                    <CardsSearch book={bookData} />
                }
            </div>
          </div>
        </section>

    )
}

export default SearchBooks