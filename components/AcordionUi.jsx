'use client'

import { Accordion, AccordionBody, AccordionHeader } from "@material-tailwind/react";
import { useState } from "react"
import AllUsers from "./AllUsers";
import SpecificUser from "./SpecificUser";
import CreateUser from "./CreateUser";
import UpdateUser from "./UpdateUser";
import DeleteUser from "./DeleteUser";

const AcordionUi = () => {
    const [open, setOpen] = useState(1);

    const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <section className="w-[40rem]">
        <Accordion open = {open === 1}>
            <AccordionHeader onClick={() => handleOpen(1)}>All Users</AccordionHeader>

                <AccordionBody>
                    <AllUsers></AllUsers>
                </AccordionBody>
        </Accordion>

        <Accordion open={open === 2}>
           <AccordionHeader onClick={() => handleOpen(2)}>Search For Specific User</AccordionHeader>

                <AccordionBody>
                    <SpecificUser></SpecificUser>
                </AccordionBody>
        </Accordion>

        <Accordion open={open === 3}>
           <AccordionHeader onClick={() => handleOpen(3)}>Create New User</AccordionHeader>

                <AccordionBody>
                    <CreateUser></CreateUser>
                </AccordionBody>
        </Accordion>

        <Accordion open={open === 4}>
           <AccordionHeader onClick={() => handleOpen(4)}>Update User</AccordionHeader>

                <AccordionBody>
                   <UpdateUser></UpdateUser>
                </AccordionBody>
        </Accordion>

        <Accordion open={open === 5}>
           <AccordionHeader onClick={() => handleOpen(5)}>Update User</AccordionHeader>

                <AccordionBody>
                   <DeleteUser></DeleteUser>
                </AccordionBody>
        </Accordion>
    </section>
  )
}

export default AcordionUi