import React, { useState } from 'react';
import { Select, DatePicker, Button, Typography } from 'antd';
import './styles.css';

const Search = ({
  title,
  description,
  searchTo: { dataTo, placeholderTo },
  searchFrom: { dataFrom, placeholderFrom },
  onResult,
}) => {
  const [result, setResult] = useState({ searchTo: '', searchFrom: '', date: '' });
  const onSearchTo = (value) => {
    let arrtemp = { ...result };
    setResult({ ...arrtemp, searchTo: value });
  };
  const onSearchFrom = (value) => {
    let arrtemp = { ...result };
    setResult({ ...arrtemp, searchFrom: value });
  };
  const onChangeDate = (date, dateString) => {
    let arrtemp = { ...result };
    setResult({ ...result, date: dateString });
  };
  return (
    <div className='background-img'>
      <div className='search-container'>
        <Typography.Title className='title'>{title}</Typography.Title>
        <Typography.Title className='description'>{description}</Typography.Title>
        <div className='search-body'>
          <div className='search-address'>
            <Select
              showSearch
              placeholder={placeholderTo}
              optionFilterProp='children'
              onChange={onSearchTo}
              filterOption={(input, option) =>
                (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
              }
              className='select-address-item'
              size='large'
              options={dataTo}
            />
          </div>
          <div className='search-date'>
            <div>
              <DatePicker onChange={onChangeDate} className='select-date-item' size='large' />
            </div>
            <div>
              <Select
                showSearch
                placeholder={placeholderFrom}
                optionFilterProp='children'
                onChange={onSearchFrom}
                filterOption={(input, option) =>
                  (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                }
                className='select-date-item'
                options={dataFrom}
                size='large'
              />
            </div>
            <div>
              <Button type='primary' size={'large'} onClick={() => onResult(result)}>
                Tìm
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
