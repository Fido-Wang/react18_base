import React from 'react'
import { Button, Input, Space, Table, Tag } from 'antd'
import axios from 'axios'
import'./app.css'

const { Search } = Input
const { Column, ColumnGroup } = Table;

class App extends React.Component {
    state = {
        list : [
            {
                key: '1',
                firstName: 'John',
                lastName: 'Brown',
                age: 32,
                address: 'New York No. 1 Lake Park',
                tags: ['nice', 'developer'],
            },
            {
                key: '2',
                firstName: 'Jim',
                lastName: 'Green',
                age: 42,
                address: 'London No. 1 Lake Park',
                tags: ['loser'],
            },
            {
                key: '3',
                firstName: 'Joe',
                lastName: 'Black',
                age: 32,
                address: 'Sidney No. 1 Lake Park',
                tags: ['cool', 'teacher'],
            },
        ]
    }
    // 搜索按钮
    handleSearch =(value)=> {
        console.log('search', value)
    }
    // 加载列表
    loadList = async()=> {
        const res = await axios.get('http:localhost:3001/data')
        console.log(res)
        this.setState({
            list: res.data
        })
    }
    componentDidMount() {
        this.loadList()
    }
    render() {
        return (
            <>
                <h3>this is App</h3>
                <Button type="primary">hello</Button>
                <Search
                    placeholder="请输入"
                    allowClear
                    enterButton="Search"
                    size="large"
                    onSearch={ this.handleSearch }
                />

                <Table dataSource={ this.state.list} bordered>
                    <Column title="姓名" dataIndex="firstName" key="firstName" />

                    <Column title="年龄" dataIndex="age" key="age" />
                    <Column title="地址" dataIndex="address" key="address" />
                    <Column
                        title="标签"
                        dataIndex="tags"
                        key="tags"
                        render={(tags) => (
                            <>
                                {tags.map((tag) => (
                                    <Tag color="blue" key={tag}>
                                        {tag}
                                    </Tag>
                                ))}
                            </>
                        )}
                    />
                    <Column
                        title="操作"
                        key="action"
                        render={(_, record) => (
                            <Space size="middle">
                                <a>Invite {record.lastName}</a>
                                <a>Delete</a>
                            </Space>
                        )}
                    />
                </Table>
            </>
        )
    }

}

export default App