import React from 'react'
import AccordionBody from './AccordionBody'
import { Accordion, AccordionTab } from 'primereact/accordion'

const Grievance = ({title,issues}) => {
    return (
        <div className="card">
            <Accordion activeIndex={null}>
                <AccordionTab
                    header={
                        <div className="flex align-items-center">
                            <span className="vertical-align-middle text-primary">{title}</span>
                        </div>
                    }>
                    {
                        issues.length === 0 ? <h2 className='my-6'>No {title} issues found</h2> :
                            issues?.map((issue) => {

                                return <AccordionBody id={issue.id}
                                    key={issue.id}
                                    title={issue.title}
                                    description={issue.description}
                                    complainant={issue.complainant}
                                    resolution={issue.resolution}
                                    resolved={issue.resolved}
                                    stamp={issue.stamp} />

                            })
                    }
                </AccordionTab>
            </Accordion>
        </div>
    )
}

export default Grievance
