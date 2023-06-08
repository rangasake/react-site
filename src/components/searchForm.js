import React from "react";

import { UserOutlined, AudioOutlined } from '@ant-design/icons';
import { AutoComplete, Input } from 'antd';
const renderTitle = (title) => (
  <span>
    {title}
    <a
      style={{
        float: 'right',
      }}
      href="https://www.google.com/search?q=teletextholidays"
      target="_blank"
      rel="noopener noreferrer"
    >
      more
    </a>
  </span>
);
const renderItem = (title, count) => ({
  value: title,
  label: (
    <div
      style={{
        
        display: 'flex',
        justifyContent: 'space-between',
      }}
    >
      {title}
      {/* <span>
        <UserOutlined /> {count}
      </span> */}
    </div>
  ),
});
const options = [
  {
    label: renderTitle('Top Destinations'),
    options: [renderItem('Maldives'), renderItem('Goa', 10600)],
  },
  {
    label: renderTitle('Top Holiday Pacakges'),
    options: [renderItem('Cheap Holidays', 60100), renderItem('All Inclusive', 30010)],
  },
  {
    label: renderTitle('Articles'),
    options: [renderItem('Travel News and Blog', 100000)],
  },
];
const { Search } = Input;
const onSearch = (value) => console.log(value);
const suffix = (
    <AudioOutlined
      style={{
        fontSize: 16,
        color: '#1890ff',
      }}
    />
  );

 

const Form = () => (
  <AutoComplete
    popupClassName="certain-category-search-dropdown"
    dropdownMatchSelectWidth={230}
    style={{
      width: 230,

    }}
    options={options}
  >
<Search
style={{ }}
      placeholder="Search your destination..."
      size="small"
      suffix={suffix}
      onSearch={onSearch}
    />
    
  </AutoComplete>
);
export default Form;
