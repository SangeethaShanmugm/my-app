import { useFormik } from "formik"
import * as yup from "yup"


const formValidationSchema = yup.object({
  password: yup.string().min(8, "Need a longer password")
})

export function BasicForm() {
   const formik = useFormik({
    initialValues: { email: "cool", password: "abc" },
    validationSchema: formValidationSchema,
    onSubmit: (values) => {
      console.log("onSubmit", values);
    }
   })

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <input 
          id="email"
          name="email"
          value={formik.values.email}  
          onChange={formik.handleChange}
          type="email" 
          placeholder="Email" />

        <input 
          id="password"
          name="password"
          value={formik.values.password} 
          onChange={formik.handleChange}
          type="password" 
          placeholder="Password" />
          {formik.errors.password}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
