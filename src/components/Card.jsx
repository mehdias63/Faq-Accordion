import React from 'react'
import Accordion from './Accordion'

export default function Card() {
  return (
    <div>
        <div>
            <img />
            <h1>Fag</h1>
        </div>
        <Accordion
        title="What is Frontend Mentor, and how will it help me?"
        text="Frontend Mentor offers realistic coding challenges to help
        developers improve their frontend coding skills with projects in
        HTML, CSS, and JavaScript. It&apos;s suitable for all levels and
        ideal for portfolio building."
        />
    </div>
  )
}
