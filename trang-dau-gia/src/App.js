import React from 'react';
import { Table, Layout, Menu, Input, Button, Typography, Image, Space, InputNumber } from 'antd';
import { SearchOutlined, ShoppingCartOutlined, WalletOutlined, InfoCircleOutlined, SendOutlined } from '@ant-design/icons';
import './App.css';

const { Header, Content } = Layout;
const { Text, Title } = Typography;
const onChange = (value) => {
  console.log('changed', value);
};
const dataSource = [
  { name: 'MR Nam', price:'18750000 vnd', time: '2p ago'},
  { name: 'MR Nam', price:'17500000 vnd', time: '2p ago'},
  { name: 'MR Nam', price:'17000000 vnd', time: '2p ago' },
];
const columns = [
  { title: 'Tên người đấu giá', dataIndex: 'name' },
  { title: 'Giá trị đấu giá', dataIndex: 'price' },
  { title: 'Thời gian đấu giá', dataIndex: 'time' },
];

const logos = [

  'https://baobiphuongnam.com/datafiles/33230/upload/files/LOGO%20PN-01.png',
  'https://cdn.haitrieu.com/wp-content/uploads/2023/06/Logo-Tong-Cong-Ty-319.png',
  'https://namapacking.com/wp-content/uploads/2020/11/logo_nama-300x300.png',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/General_Electric_logo.svg/2048px-General_Electric_logo.svg.png',
  'https://thietkelogodep.com.vn/wp-content/uploads/2015/07/logo-gia-thinh-02.png',
];

function App() {
  return (
    <Layout className="main-layout"> {/* Wrap in a Layout component */}
      <Header style={{ height: '170px', backgroundColor: '#E4E3E3', width: '100%' }}>
        <div className="topsection">
          <div className="content">
            <div className="vietnam-text-box">
              <div className="vietnam-text">Việt Nam</div>
              <div className="date-text">Ngày </div>
            </div>
          </div>
          <div className="login-register">
            <a href="#" className="login-link">Đăng nhập</a>
            <a href="#" className="register-link">Đăng ký</a>  {/* Added closing tag */}
          </div>
        </div>
        <div className="bottomsection">
          <Menu mode="horizontal" className="navbar">
            <Menu.Item key="1">Trang chủ</Menu.Item>
            <Menu.Item key="2">Phòng đấu giá</Menu.Item>
            <Menu.Item key="3">Sản phẩm</Menu.Item>
            <Menu.Item key="4">Sự kiện</Menu.Item>
            <Menu.Item key="5">Giới thiệu</Menu.Item>
          </Menu>
          <div className="search-buttons">
            <Input className="search-input" placeholder="Tìm kiếm" suffix={<SearchOutlined />} />
            <Button className="icon-button"><ShoppingCartOutlined /></Button>
            <Button className="icon-button"><WalletOutlined /></Button>
          </div>
        </div>
      </Header>
      <Content className="main-content"> {}
        <div> {}
      <p className="low-price-text">
        <Space>
          <InfoCircleOutlined />
          <Text>Giá thấp nhất được cập nhật mỗi 5 phút</Text>
        </Space>
      </p>
      <div>
        <p className="tenphongdg">
          <Text >PHÒNG ĐẤU GIÁ #12836</Text>
        </p>

        <div className="container">

          <div className="box">
            <div className="product-box">
              <p className="tensanpham">
               Laptop DELL XXXX
              </p>
              <Image
                  width={200} 
                  height={150} 
                  src="https://hoangsonstore.com/wp-content/uploads/2022/08/moi-100-laptop-gaming-dell-g15-5515-ryzen-7-5800h-8gb-512gb-rtx-3050ti-15-6-fhd-120hz-3277-3.jpg" // Replace with your image URL
                  alt="Product_Image" 
              />
              <div className="button-container"> {}
                <Button type="primary">Đấu giá</Button>
                <Button type="primary" danger>Huỷ đấu giá</Button>
              </div>
            </div>
          </div>

          <div className="time-and-price">
            <p>Thời gian còn lại</p>
            <div className="time-container">
              <Text strong >05:00:00</Text>
            </div>
            <p> Giá trị định giá</p>
            <div className="price-container">
              <Text strong>100.000.000 VNĐ</Text>
            </div>
            <p> Giá thấp nhất hiện tại</p>
            <div className="lowest-price-container">
              <Text strong>80.000.000 VNĐ</Text>
            </div>
          </div>

          <div className="box">
            <div className="chat-container"> {}
              <div className="message-box"> {}
              </div>
            </div>
            <div className="chat-input"> {}
              <input type="text" placeholder="Type your message..." />
              <Button className='icon-button'> <SendOutlined /></Button>
            </div>
          </div>
          
        </div>
        
        <div className="container">

          <div className="box">
            <div classname="nhap-gia">
              <p style={{fontSize: "20px", fontWeight: "bold"}}> Nhập số tiền giảm </p>
                <InputNumber size="large" placeholder='nhập giá tiền' onChange={onChange} style={{ width: 300 }}/>
              <div className="price-button">
                <Button size="large" style={{ fontWeight: 'bold' }}>100,000đ</Button>
                <Button size="large" style={{ fontWeight: 'bold' }}>200,000đ</Button>
              </div>
                <div className="price-button">
                  <Button size="large" style={{ fontWeight: 'bold' }}>500,000đ</Button>
                  <Button size="large" style={{ fontWeight: 'bold' }}>1,000,000đ</Button>
                </div>
                <div className="price-button">
                  <Button Button size="large" style={{ fontWeight: 'bold' }}>2,000,000đ</Button>
                  <Button size="large" style={{ fontWeight: 'bold' }}>3,000,000đ</Button>
                </div>
              </div>
            </div>
            <div className="box" style={{ marginTop: '50px' }}>
              <div className="bang-dau-gia"  >
                <Table dataSource={dataSource} columns={columns} />
              </div>
            </div>

          </div>

        </div>

      </div>

      <Title level={2} style={{textAlign: 'center'}}>Các phòng đấu giá khác</Title>

      <div className="container" style={{marginTop: '30px'}}>
      <div className='box'   
            style={{
              border: '1px solid #e7e7e7'
            }}>
          <Title level={4} style={{ color: '#bbb8b8' }}>Thời gian đấu giá</Title>
          <Title level={3} >12:20 - 21/05/2023</Title>
          <Image
            width={300} 
            height={200} 
            style={{
              borderRadius: '0 40px 0 40px',
              border: '3px solid #e7e7e7'
            }}
            src="https://hoangsonstore.com/wp-content/uploads/2022/08/moi-100-laptop-gaming-dell-g15-5515-ryzen-7-5800h-8gb-512gb-rtx-3050ti-15-6-fhd-120hz-3277-3.jpg" // Replace with your image URL
            alt="Product_Image" 
          />
          <Title level={3} >Laptop DELL XXXX</Title>
          <div className="price-container-2">
            <div className="price-label" style={{ display: 'flex', justifyContent: 'space-around' }}>
              <Title level={5} style={{ color: '#bbb8b8', display: 'inline-block', marginLeft: '50px', margin: 0 }}>Giá khởi điểm:</Title>
              <Title level={5} style={{ color: '#bbb8b8', display: 'inline-block', marginRight: '50px', margin: 0 }}>200,000,000 VNĐ</Title>
            </div>
            <div className="price-label" style={{ display: 'flex', justifyContent: 'space-around' }}>
              <Title level={5} style={{ color: '#bbb8b8', display: 'inline-block', marginLeft: '50px', margin: 0 }}>Giá hiện tại:</Title>
              <Title level={5} style={{ color: '#bbb8b8', display: 'inline-block', marginRight: '50px', margin: 0 }}>200,000,000 VNĐ</Title>
            </div>
          </div>
          <Button type='primary' style={{ textAlign: 'center', marginRight:'250px', marginTop: '20px', borderRadius: '10px 10px 10px 0px', backgroundColor: '#a5d6f1'}}>Chi tiết</Button>
          
        </div>
        <div className='box' 
          style={{
              border: '1px solid #e7e7e7',
              margin: '0 10px'
            }}>
          <Title level={4} style={{ color: '#bbb8b8' }}>Thời gian đấu giá</Title>
          <Title level={3} >12:20 - 21/05/2023</Title>
          <Image
            width={300} 
            height={200} 
            style={{
              borderRadius: '0 40px 0 40px',
              border: '3px solid #e7e7e7'
            }}
            src="https://hoangsonstore.com/wp-content/uploads/2022/08/moi-100-laptop-gaming-dell-g15-5515-ryzen-7-5800h-8gb-512gb-rtx-3050ti-15-6-fhd-120hz-3277-3.jpg" // Replace with your image URL
            alt="Product_Image" 
          />
          <Title level={3} >Laptop DELL XXXX</Title>
          <div className="price-container-2">
            <div className="price-label" style={{ display: 'flex', justifyContent: 'space-around' }}>
              <Title level={5} style={{ color: '#bbb8b8', display: 'inline-block', marginLeft: '50px', margin: 0 }}>Giá khởi điểm:</Title>
              <Title level={5} style={{ color: '#bbb8b8', display: 'inline-block', marginRight: '50px', margin: 0 }}>200,000,000 VNĐ</Title>
            </div>
            <div className="price-label" style={{ display: 'flex', justifyContent: 'space-around' }}>
              <Title level={5} style={{ color: '#bbb8b8', display: 'inline-block', marginLeft: '50px', margin: 0 }}>Giá hiện tại:</Title>
              <Title level={5} style={{ color: '#bbb8b8', display: 'inline-block', marginRight: '50px', margin: 0 }}>200,000,000 VNĐ</Title>
            </div>
          </div>
          <Button type='primary' style={{ textAlign: 'center', marginRight:'250px', marginTop: '20px', borderRadius: '10px 10px 10px 0px', backgroundColor: '#a5d6f1'}}>Chi tiết</Button>
        </div>
        <div className='box'
        style={{
          border: '1px solid #e7e7e7'
        }}>
          <Title level={4} style={{ color: '#bbb8b8' }}>Thời gian đấu giá</Title>
          <Title level={3} >12:20 - 21/05/2023</Title>
          <Image
            width={300} 
            height={200} 
            style={{
              borderRadius: '0 40px 0 40px',
              border: '3px solid #e7e7e7'
            }}
            src="https://hoangsonstore.com/wp-content/uploads/2022/08/moi-100-laptop-gaming-dell-g15-5515-ryzen-7-5800h-8gb-512gb-rtx-3050ti-15-6-fhd-120hz-3277-3.jpg" // Replace with your image URL
            alt="Product_Image" 
          />
          <Title level={3} >Laptop DELL XXXX</Title>
          <div className="price-container-2">
            <div className="price-label" style={{ display: 'flex', justifyContent: 'space-around' }}>
              <Title level={5} style={{ color: '#bbb8b8', display: 'inline-block', marginLeft: '50px', margin: 0 }}>Giá khởi điểm:</Title>
              <Title level={5} style={{ color: '#bbb8b8', display: 'inline-block', marginRight: '50px', margin: 0 }}>200,000,000 VNĐ</Title>
            </div>
            <div className="price-label" style={{ display: 'flex', justifyContent: 'space-around' }}>
              <Title level={5} style={{ color: '#bbb8b8', display: 'inline-block', marginLeft: '50px', margin: 0 }}>Giá hiện tại:</Title>
              <Title level={5} style={{ color: '#bbb8b8', display: 'inline-block', marginRight: '50px', margin: 0 }}>200,000,000 VNĐ</Title>
            </div>
          </div>
          
          <Button type='primary' style={{ textAlign: 'center', marginRight:'250px', marginTop: '20px', borderRadius: '10px 10px 10px 0px', backgroundColor: '#a5d6f1'}}>Chi tiết</Button>
          
        </div>

      </div>
        <div className="logo-frame">
        <Title level={1} style={{ textAlign: 'center' }}>ĐỐI TÁC LIÊN KẾT</Title>
        <div className="logos">
          {logos.map((logoURL, index) => (
          <img key={index} src={logoURL} alt={`Logo ${index + 1}`} />
          ))}
        </div>
      </div>

      <div style={{height: '20px', backgroundColor: '#a5d6f1', width: '10%', borderRadius: '0 10px 0px 10px', textAlign: 'center', marginLeft:'100px' ,marginBottom: '20px'}}>
          <p style={{fontWeight: 'bold', color: 'white'}}>Thông báo</p>
      </div>
      
      <div class="notify-box">
        <div class="notify"></div>
        <div class="notify"></div>
        <div class="notify"></div>
      </div>

    </Content>
  </Layout>
  );
}



export { App };
