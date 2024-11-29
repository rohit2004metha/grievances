import { Button } from 'primereact/button'
import { InputText } from 'primereact/inputtext'
import { InputTextarea } from 'primereact/inputtextarea'
import React, { useContext, useState } from 'react'
import axios from 'axios'
import { AppContext } from '../context/AppContext'


const IssueForm = () => {

    /*

    `id` varchar(50) NOT NULL,
  `title` varchar(255) NOT NULL,
  `complainant` varchar(255) NOT NULL,
  `description` varchar(1500) NOT NULL,
  `resolved` tinyint(1) NOT NULL,
  `resolution` varchar(1000) DEFAULT NULL,
  `stamp` datetime NOT NULL,
    PRIMARY KEY (`id`)
     
     */
    const [issueDetails, setIssueDetails] = useState({
        id: 0,
        title: "",
        complainant: "",
        description: "",
        resolved: false,
        resolution: ""
    })
    const { showToast, toastTopRight } = useContext(AppContext)
    const handleChange = (e) => {
        const { name, value } = e.target;
        setIssueDetails({ ...issueDetails, [name]: value })
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        let issue = {
            title: issueDetails.title,
            from: issueDetails.complainant,
            description: issueDetails.description
        }
        try {
            let { data } = await axios.post(`${process.env.REACT_APP_API_URL}/api/Grievances`, issue)
            console.log("submission response = ", data)
            showToast(e, toastTopRight, "success", "Success", "Issue submitted !")
            setIssueDetails({
                id: 0,
                title: "",
                complainant: "",
                description: "",
                resolved: false,
                resolution: ""
            })
        } catch (err) {
            console.log(err.message)
            showToast(e, toastTopRight, "error", "Oops!", "Something went wrong, please try again !")
        }

    }

    return (
        <form onSubmit={handleSubmit} className='w-full sm:w-96'>
            <h2 className='text-2xl font-light my-4'>Add new Grievance</h2>
            <div className='flex flex-col gap-3'>
                {/* <div className='grid grid-cols-2 gap-2'> */}
                <InputText placeholder='Full name' name={"complainant"} value={issueDetails.complainant} onChange={handleChange} required autoComplete='off' />
                {/* <InputText placeholder='Last name' name={"lname"} value={issueDetails.lname} onChange={handleChange} required autoComplete='off' /> */}
                {/* </div> */}
                <InputText placeholder='Title of the issue' name={"title"} value={issueDetails.title} onChange={handleChange} required autoComplete='off' />
                <InputTextarea placeholder='Issue Description' name={"description"} value={issueDetails.description} onChange={handleChange} required autoComplete='off' />
                <Button type='submit' label='Submit' className='self-start' />
            </div>
        </form>
    )
}

export default IssueForm
