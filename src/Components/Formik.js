import React from 'react'
import { useFormik} from 'formik'
import * as yup from "yup"

const Formik = () => {



    const formic=useFormik({
        initialValues:{
            firstname:"",
            lastname:""
        },
        // onSubmit:(values)=>{
        
        // },

        // validate:(values)=>{
        //     let regexForFirtname=/^[\w]{5,}$/
        //     let errors ={}

        //     // write contional statements
        //     if(regexForFirtname.test){
        //           errors.firstname="This field is required"
        //     }

        //     if(values.lastname===''){
        //         errors.lastnamr="This field is required"
        //   }
        // }

        validationSchema:yup.object({
            firstname:yup.string().required("This field is required").min(5, "must be greater than 5"),
            lastname:yup.string().required("This field is required").min(5, "must be greater than 5"),
            password:yup.string().matches(/^[\w]{5}$/, "must be exactly 5 characters")
        })
    })
   

    const pr=(e)=>{
        e.preventDefault()
    }

    console.log()


  return (
    <>
    <div  onSubmit={pr} className="container-fluid">
        <div className="mb-3">
                <label>firstname</label>
                <input 
                className='is-invalid form-control'
                type="text" 
                onChange={formic.handleChange}
                name="firstname" />
        </div>
        <div>{formic.errors.firstname}</div>


         <div className="mb-3">
                <label>lastname</label>
                <input 
                className='form-control'
                type="text" onChange={formic.handleChange}
                name="lastname"
                onBlur={formic.handleBlur} />
          </div>
           <div className=''>{formic.errors.lastname}</div>
           
           <button className='bg-warning' onSubmit={()=>formic}> Button</button>
    </div>
    </>
  )
}

export default Formik