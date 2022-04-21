import React from 'react';
import {Formik, useFormik} from 'formik';
const CustomForm = () => {
    const formik=useFormik({
        initialValues:{
            name:'',
            email:'',
            channel:''
        }
    })
    console.log('Form values',formik.values);
    function handleSubmit(event) {
        event.preventDefault();
      }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>name</label>
                    <input type="text" name="name"  onChange={formik.handleChange} value={formik.values.name} />
                </div>
                <div>
                    <label>email</label>
                    <input type="text" name="email" onChange={formik.handleChange} value={formik.values.email} />
                </div>
                <div>
                    <label>channel</label>
                    <input type="text" name="channel" onChange={formik.handleChange} value={formik.values.channel} />
                </div>
                <button>submit</button>
                
            </form>
            


        </div>

    )
}
export default CustomForm