import React from 'react'
import AccordionBody from './AccordionBody'

const SearchResult = ({ results }) => {
    return (
        <div>
            {
            results.length===0 ? <h1>Not issues found</h1> :
                results?.map(issue => {
                    return (
                        <AccordionBody id={issue.id}
                            key={issue.id}
                            title={issue.title}
                            description={issue.description}
                            complainant={issue.complainant}
                            resolution={issue.resolution}
                            resolved={issue.resolved}
                            stamp={issue.stamp} />
                    )
                })
            }
        </div>
    )
}

export default SearchResult
