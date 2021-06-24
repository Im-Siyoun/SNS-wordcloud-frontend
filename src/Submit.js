import React from 'react';
import styled from 'styled-components';

const Image = styled.img`
    height: 400px;
    width: 800px;
`;
class Submit extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data: null,
            isloaded: false,
            keyword: null
        };
    };
    

    handleSubmit = async (e) => {
        e.preventDefault()
        alert(e.target.keyword.value)
        await fetch('http://localhost:8000/data/',{ 
            method: "POST",
            body:JSON.stringify({ 
                keyword: e.target.keyword.value,
            }),
        })
            .then((response) => response.json())
            .then((response) => {
                this.setState({ data: response.data, isloaded: true });
            })
    }

    render() {
        const { data, isloaded } = this.state;
        if (isloaded) {
            return (
            <div>
            <form onSubmit={this.handleSubmit}>
                <legend>검색 키워드를 입력해주세요!</legend>
                <input type='text' name='keyword' />
                <button type="submit"/>
            </form>
            <Image src={`data:image/jpeg;base64,${data}`} />
            </div>
        )}
        else {
            return (
            <div>
            <form onSubmit={this.handleSubmit}>
                <legend>검색 키워드를 입력해주세요!</legend>
                <input type='text' name='keyword' />
                <button type="submit">제출</button>
            </form>
            </div>
            )
        }
    }
}

export default Submit;