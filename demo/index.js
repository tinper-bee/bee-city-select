
import { Con, Row, Col } from 'bee-layout';
import { Panel } from 'bee-panel';
import Button from 'bee-button';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import CitySelect from '../src';


const CARET = <i className="uf uf-arrow-down"></i>;

const CARETUP = <i className="uf uf-arrow-up"></i>;


var Demo1 = require("./demolist/Demo1");var DemoArray = [{"example":<Demo1 />,"title":" 地区级联","code":"/**\n*\n* @title 地区级联\n* @description 中国地区级联\n*\n*/\n\nimport React, { Component } from 'react';\nimport ReactDOM from 'react-dom';\nimport { CitySelect, Button  } from 'tinper-bee';\n\nclass Demo1 extends Component {\n\n\tconstructor() {\n\t\tsuper();\n\t\tthis.state = {\n\t\t\tdefaultValue:{ province:'北京',city:'北京',area:'东城区'},\n\t\t\tvalue:null\n\t\t}\n\t}\n\n\tonChange=(obj)=>{\n\t\tconsole.log(obj)\n\t}\n\n\tbtnOnClick=()=>{\n\t\tthis.setState({\n\t\t\tvalue:{ province:'山西',city:'长治',area:'长治县'}\n\t\t})\n\t}\n\n\trender () {\n\t\tlet \tvalue = { province:'山西',city:'长治',area:'长治县'};\n\n\t\tlet pd =[\n\n\t\t\t{ \"name\": \"北京1\", \"city\":[{\"name\":\"北京11\", \"area\":[\"东城区\",\"西城区\",\"崇文区\",\"宣武区\",\"朝阳区\",\"丰台区\",\"石景山区\",\"海淀区\",\"门头沟区\",\"房山区\",\"通州区\",\"顺义区\",\"昌平区\",\"大兴区\",\"平谷区\",\"怀柔区\",\"密云县\",\"延庆县\"]}]},\n\t\t\n\t\t\t{ \"name\": \"天津2\", \"city\":[{\"name\":\"天津11\", \"area\":[\"和平区\",\"河东区\",\"河西区\",\"南开区\",\"河北区\",\"红桥区\",\"塘沽区\",\"汉沽区\",\"大港区\",\"东丽区\",\"西青区\",\"津南区\",\"北辰区\",\"武清区\",\"宝坻区\",\"宁河县\",\"静海县\",\"蓟  县\"]}]},\n\t\t]\t\t\n\t\treturn (\n\t\t\t<div>\n\t\t\t\t<CitySelect ref='city' onChange={this.onChange} defaultValue={this.state.defaultValue} value={value}/>\n\t\t\t\t<Button shape=\"border\" onClick={this.btnOnClick} style={{marginTop:\"10px\"}}>代码设置数据</Button>\n\n\n\n\t\t\t\t<CitySelect provinceData={pd} defaultValue={{ province:'北京1',city:'北京11',area:'东城区'}}/>\n\t\t\t</div>\n\t)}\n}\n","desc":" 中国地区级联"}]


class Demo extends Component {
    constructor(props){
        super(props);
        this.state = {
            open: false
        }
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.setState({ open: !this.state.open })
    }

    render () {
        const { title, example, code, desc  } = this.props;
        let caret = this.state.open ? CARETUP : CARET;
        let text = this.state.open ? "隐藏代码" : "查看代码";

        const footer = (
            <Button shape="block" onClick={ this.handleClick }>
                { caret }
                { text }
            </Button>
        );
        return (
            <Col md={12} >
                <h3>{ title }</h3>
                <p>{ desc }</p>
                <Panel collapsible headerContent expanded={ this.state.open } colors='bordered' header={ example } footer={footer} footerStyle = {{padding: 0}}>
                    <pre><code className="hljs javascript">{ code }</code></pre>
                </Panel>
            </Col>
        )
    }
}

class DemoGroup extends Component {
    constructor(props){
        super(props)
    }
    render () {
        return (
                <Row>
                    {DemoArray.map((child,index) => {

                        return (
                            <Demo example= {child.example} title= {child.title} code= {child.code} desc= {child.desc} key= {index}/>
                        )

                    })}
                </Row>
        )
    }
}

ReactDOM.render(<DemoGroup/>, document.getElementById('tinperBeeDemo'));
