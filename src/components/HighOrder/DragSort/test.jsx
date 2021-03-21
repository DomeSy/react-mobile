import './TestDarg.less'

const DargTest = [
  {name: 'apple'},
  {name: 'watermelon'},
  {name: 'banana'},
  {name: 'lemon'},
  {name: 'orange'},
]

const renderTset = (tag) => {
  return <div className="DDragTest">
    <div className="DDragTest-tag">
      <div>{tag.name}</div>
    </div>
  </div>
}

const onChangeTest = (list) => {
  console.log(list)
}

export {
  DargTest,
  renderTset,
  onChangeTest
}
