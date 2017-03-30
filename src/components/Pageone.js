import React from'react'
import Pagetwo from'./Pagetwo'
import {findCurrent} from '../api/current'
import Progressone from './Progressone'
export default class Pageone extends React.Component{
  constructor(){
    super()
    this.state={
      av:[]
    }
    this.selectSubject = this.selectSubject.bind(this)
  }
  selectSubject(e){
    const { av } = this.state
    const x = e.target.value
    const successx = findCurrent(x)
    this.setState({
      av:successx
    })
  }
  render(){
    const { gotwo } = this.props
    const { av } = this.state
    return(

      <div className="row">
      <Progressone/>
      <div className="container middle">
        <form className="eiei">
          <div className="row m0">
            <div className="col-md-1 col-xs-2 text-center topic-text">
              <label>คณะ</label>
            </div>
            <div className="col-md-11 col-xs-10">
              <select className="form-control input-lg" id="sel1" onChange={this.selectSubject}>
                <option selected disabled>เลือกคณะ</option>
                <option value="01">คณะวิศวกรรมศาสตร์</option>
                <option value="02">คณะครุศาสตร์อุตสาหกรรม</option>
                <option value="03">คณะวิทยาลัยเทคโนโลยีอุตสาหกรรม</option>
                <option value="04">คณะวิทยาศาสตร์ประยุกต์</option>
                <option value="05">คณะอุตสาหกรรมเกษตร</option>
                <option value="06">คณะเทคโนโลยีและการจัดการอุตสาหกรรม</option>
                <option value="06">คณะเทคโนโลยีและการจัดการอุตสาหกรรม</option>
              </select>
            </div>
          </div>
          <div className="row m0">
            <div className="col-md-1 col-xs-2 text-center topic-text">
              <label>หลักสูตร</label>
            </div>
            <div className="col-md-11 col-xs-10">
              <div className="dropdown">
                <select className="form-control input-lg" id="sel1">
                  {
                    av.map((res)=>{
                      return <option>{res.curr_name}</option>
                    })
                  }
                </select>
              </div>
            </div>
            </div>
            <div className="row m0">
              <div className="col-md-1 col-xs-2 text-center topic-text">
                <label>หลักสูตร</label>
              </div>
              <div className="col-md-5 col-xs-4">
                <div className="dropdown">
                  <select className="form-control input-lg" id="sel1">
                    <option selected disabled>เลือกหลักสูตร</option>
                    <option>D สมทบพิเศษ</option>
                    <option>D สมทบพิเศษ</option>
                    <option>D สมทบพิเศษ</option>
                    <option>D สมทบพิเศษ</option>
                    <option>D สมทบพิเศษ</option>
                    <option>D สมทบพิเศษ</option>
                  </select>
                </div>
              </div>
              <div className="col-md-1 col-xs-2 text-center topic-text">
                <label>ชั้นปี</label>
              </div>
              <div className="col-md-5 col-xs-4">
                <div className="dropdown">
                  <div className="dropdown">
                    <select className="form-control input-lg" id="sel1">
                      <option selected disabled>เลือกปี</option>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                    </select>
                  </div>
                  </div>
                </div>
              </div>
            <div className="row m0">
              <div className="col-md-1 col-xs-2 text-center topic-text">
                <label>ห้อง</label>
              </div>
              <div className="col-md-5 col-xs-4">
                <div className="dropdown">
                  <div className="dropdown">
                    <select className="form-control input-lg" id="sel1">
                      <option selected disabled>เลือกห้อง</option>
                      <option>A</option>
                      <option>B</option>
                      <option>C</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="col-md-1 col-xs-2 text-center topic-text">
                <label>รอบ</label>
              </div>
              <div className="col-md-5 col-xs-4">
                <div className="dropdown">
                  <div className="dropdown">
                    <select className="form-control input-lg" id="sel1">
                      <option selected disabled>เลือกรอบ</option>
                      <option>เช้า</option>
                      <option>บ่าย</option>
                      <option>เย็น</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div className="row m1">

              <div className="col-md-12 col-xs-12">

                  <button type="button" onClick={ ()=> gotwo() } className="btn btn-primary size-menu2 btn-lg btn1">ดึงวิชา</button>

              </div>
            </div>

          </form>
        </div>
      </div>

    )
  }
}
