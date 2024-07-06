import { Box, Button, TextField } from '@mui/material'
import React,{useState} from 'react'

const Add = (product) => {
    const [page,setPage]=useState('Home')
    const [form,setForm]=useState({
     title:product?.title||'',
     price:product?.price||'',
     category:product?.category||'',
     image:product?.image||''
    })
    function valueAdd(){
       console.log(form)
    }
    function valueCap(e){
       setForm({...form,[e.target.name]:e.target.value})
    }
  return (
    <div>
        <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <h1>Welcome to {page} Page</h1>
      <div>
        <TextField
          required
          id="outlined-required"
          label="Title"
          name='title'
          value={form.title}
          onChange={valueCap}
        />
        </div>
        <div>
        <TextField
          id="outlined-disabled"
          label="Price"
          type="price"
          name='price'
          value={form.price}
          onChange={valueCap}
        />
        </div>
        <div>
        <TextField
          id="outlined-password-input"
          label="Category"
          name='category'
          value={form.category}
          onChange={valueCap}
        />
        </div>
        <div>
        <TextField
          id="outlined-read-only-input"
          label="Image"
          name='image'
          value={form.image}
          onChange={valueCap}
        />
        </div>
        </Box> 
         <Button style={{backgroundColor:"steelblue"}} variant='contained' onClick={valueAdd}>  Add</Button> 
    </div>
  )
}

export default Add

