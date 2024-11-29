import { Button } from 'primereact/button'
import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'


const AccordionBody = ({ id, title, complainant, description, resolved, resolution, stamp }) => {
    const { updateIssueDetail } = useContext(AppContext)
    const handleMoreInfo = () => {
        let issue = { id, title, complainant, description, resolved, resolution, stamp }
        updateIssueDetail(issue)
        router(`/admin/issues/${id}`)
    }
    const handleResolve = () => {
        router(`/admin/issues/`);
        console.log("resolved")
    }

    const router = useNavigate()
    return (
        <section className="p-6 font-light border flex flex-col gap-4 sm:gap-0 sm:flex-row justify-between sm:items-end rounded-md my-4 border-gray-600">
            <div>
                <p className='text-lg font-normal'>{title}</p>
                <p className='mt-1'>
                    <span className='text-sm font-light'>{complainant}</span> |
                    <span className='text-sm font-light'> {stamp}</span>
                </p>
            </div>

            <div className='flex gap-2'>
                <Button size='small' label={"More Info"} onClick={handleMoreInfo} />
                {/* <Button size='small' label={"Mark Resolved"} onClick={handleResolve}/> */}
            </div>
        </section>
    )
}

export default AccordionBody
