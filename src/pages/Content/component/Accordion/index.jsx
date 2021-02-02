import React from 'react'
import { Accordion, List } from 'antd-mobile';

import './index.less'

function Index() {
  return (
    <div className="AccordionList">
      <Accordion accordion  className="AccordionList-Accordion">
        <Accordion.Panel className="AccordionList-Accordion-Panel" header="Title 1" >
          <List className="AccordionList-Accordion-Panel-List">
            <List.Item className="AccordionList-Accordion-Panel-List-Item">content 1</List.Item>
            <List.Item className="AccordionList-Accordion-Panel-List-Item">content 2</List.Item>
            <List.Item className="AccordionList-Accordion-Panel-List-Item">content 3</List.Item>
          </List>
        </Accordion.Panel>
        <Accordion.Panel className="AccordionList-Accordion-Panel" header="Title 2" >
          <List className="AccordionList-Accordion-Panel-List">
            <List.Item className="AccordionList-Accordion-Panel-List-Item">content 1</List.Item>
            <List.Item className="AccordionList-Accordion-Panel-List-Item">content 2</List.Item>
            <List.Item className="AccordionList-Accordion-Panel-List-Item">content 3</List.Item>
          </List>
        </Accordion.Panel>
        <Accordion.Panel className="AccordionList-Accordion-Panel" header="Title 3" >
          <List className="AccordionList-Accordion-Panel-List">
            <List.Item className="AccordionList-Accordion-Panel-List-Item">content 1</List.Item>
            <List.Item className="AccordionList-Accordion-Panel-List-Item">content 2</List.Item>
            <List.Item className="AccordionList-Accordion-Panel-List-Item">content 3</List.Item>
          </List>
        </Accordion.Panel>
      </Accordion>
    </div>
  )
}
export default Index
