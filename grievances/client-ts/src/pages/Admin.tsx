import React from 'react'
import Navbar from '../components/Navbar'
import { Accordion, AccordionTab } from 'primereact/accordion';
import AccordionBody from '../components/AccordionBody';

const Admin = () => {
    return (
        <>
            <Navbar />
            <section className='flex flex-col max-w-3xl mx-6 md:mx-auto gap-8'>
                {/*  ------------ Pending Grievances ------------  */}
                <div className="card">
                    <Accordion activeIndex={0}>
                        <AccordionTab
                            header={
                                <div className="flex align-items-center">
                                    <span className="vertical-align-middle text-primary">Pending</span>
                                </div>
                            }
                        >
                            <AccordionBody id={1} title='My scooter got scratched & dented!!' description='One frustrating afternoon in the crowded parking lot, I returned to my scooter only to discover a disheartening sight. Someone had carelessly scratched and dented my beloved scooter while it was parked. It was a dismaying reminder of the lack of consideration some individuals show in shared spaces. The incident left me feeling both annoyed and disheartened, as I knew that the road to repairs and restoration would be both time-consuming and costly.' dated='24 Oct 2023' sender='Yash Ali' />
                            <AccordionBody id={2} title='My scooter got scratched & dented!!' description='One frustrating afternoon in the crowded parking lot, I returned to my scooter only to discover a disheartening sight. Someone had carelessly scratched and dented my beloved scooter while it was parked. It was a dismaying reminder of the lack of consideration some individuals show in shared spaces. The incident left me feeling both annoyed and disheartened, as I knew that the road to repairs and restoration would be both time-consuming and costly.' dated='24 Oct 2023' sender='Yash Ali' />
                            <AccordionBody id={3} title='My scooter got scratched & dented!!' description='One frustrating afternoon in the crowded parking lot, I returned to my scooter only to discover a disheartening sight. Someone had carelessly scratched and dented my beloved scooter while it was parked. It was a dismaying reminder of the lack of consideration some individuals show in shared spaces. The incident left me feeling both annoyed and disheartened, as I knew that the road to repairs and restoration would be both time-consuming and costly.' dated='24 Oct 2023' sender='Yash Ali' />
                            <AccordionBody id={4} title='My scooter got scratched & dented!!' description='One frustrating afternoon in the crowded parking lot, I returned to my scooter only to discover a disheartening sight. Someone had carelessly scratched and dented my beloved scooter while it was parked. It was a dismaying reminder of the lack of consideration some individuals show in shared spaces. The incident left me feeling both annoyed and disheartened, as I knew that the road to repairs and restoration would be both time-consuming and costly.' dated='24 Oct 2023' sender='Yash Ali' />
                        </AccordionTab>
                    </Accordion>
                </div>
                {/*  ------------ Resolved Grievances ------------  */}
                <div className="card">
                    <Accordion activeIndex={0}>
                        <AccordionTab
                            header={
                                <div className="flex align-items-center">
                                    <span className="vertical-align-middle text-primary">Resolved</span>
                                </div>
                            }
                        >
                            <AccordionBody id={1} title='My scooter got scratched & dented!!' description='One frustrating afternoon in the crowded parking lot, I returned to my scooter only to discover a disheartening sight. Someone had carelessly scratched and dented my beloved scooter while it was parked. It was a dismaying reminder of the lack of consideration some individuals show in shared spaces. The incident left me feeling both annoyed and disheartened, as I knew that the road to repairs and restoration would be both time-consuming and costly.' dated='24 Oct 2023' sender='Yash Ali' />

                        </AccordionTab>
                    </Accordion>
                </div>


            </section>
        </>
    )
}

export default Admin
