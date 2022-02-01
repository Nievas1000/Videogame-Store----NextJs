import {Formik, Field, Form} from 'formik'
import { useState } from 'react'

const CommentArea = () =>{
    const initialValues = {coment:''}
    const [coments, setComent] = useState([])

    const handleSubmit = (coment) =>{
        setComent([
            ...coments,
            coment
        ])
    }
    return(
        <div>
            <h3>Leave a comment about the game: </h3>
            <Formik
            initialValues={initialValues}
            onSubmit={(values, actions) =>{
                handleSubmit(values)
                actions.resetForm(initialValues)
            }}
            >
                <Form>
                    <Field type="text" name="coment" className="input-coment" placeholder="Coment..."/>
                    <button type="submit">Send</button>
                </Form>
            </Formik>
            <div className='zona-coments'>
                {coments.length === 0 ? <h3>There are no comments yet.</h3> : coments.map((x,index) => 
                    <p key={index}>{x.coment}</p>
                )}
            </div>
        </div>
    )
}

export default CommentArea