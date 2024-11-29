import { Button } from 'primereact/button'
import React from 'react'
import { useNavigate } from 'react-router-dom'

interface Props {
    id: Number,
    title: string,
    description: string,
    dated: string,
    sender: string
}

const AccordionBody: React.FC<Props> = ({ id, title, description, dated, sender }) => {

    const router = useNavigate()
    return (
        <section className="p-6 font-light border flex flex-col gap-4 sm:gap-0 sm:flex-row justify-between sm:items-end rounded-md my-4 border-gray-600">
            <div>
                <p className='text-lg '>{title}</p>
                <p className='mt-1'>
                    <span className='text-sm'>{sender}</span> |
                    <span className='text-sm'> {dated}</span>
                </p>
            </div>

            <div className='flex gap-2'>
                <Button size='small' label={"More Info"} outlined onClick={() => router(`/admin/issues/${id}`)} />
                <Button size='small' label={"Mark Resolved"} />
            </div>
        </section>
    )
}

export default AccordionBody
