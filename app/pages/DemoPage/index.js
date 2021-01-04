import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  Col,
  Row,
  Input,
  AutoComplete,
  List,
  Card,
  Typography,
  Empty,
  Spin,
} from 'antd';
import get from 'lodash/get';

import {
  fetchSearchData,
  getWeatherDetail,
  resetWeatherDetail,
} from './actions';
import {
  selectLocationList,
  selectWeatherDetail,
  selectTitle,
  selectIsLoading,
} from './selectors';

import reducer from './reducer';
import saga from './saga';

import 'antd/es/input/style/css';
import 'antd/es/grid/style/css';
import styles from './style.module.scss';

import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
const { Title } = Typography;

// const withQueryNull = Component => props =>
//   !props.query ? null : <Component {...props} />;

// const withResultEmpty = Component => props =>
//   !props.locationList.length ? <Empty /> : <Component {...props} />;

function WeatherPage() {
  useInjectReducer({ key: 'weather', reducer });
  useInjectSaga({ key: 'weather', saga });

  const dispatch = useDispatch();
  const locationList = useSelector(selectLocationList);
  const weatherDetail = useSelector(selectWeatherDetail);
  const locationTitle = useSelector(selectTitle);
  const isLoading = useSelector(selectIsLoading);
  const [query, setQuery] = useState('');

  const onSearch = e => {
    const text = e.toString().trim();
    if (weatherDetail.length) {
      dispatch(resetWeatherDetail());
    }
    setQuery(text);
  };

  useEffect(() => {
    let timeOutId;
    if (query) {
      timeOutId = setTimeout(() => {
        dispatch(fetchSearchData(query));
      }, 300);
    }
    return () => clearTimeout(timeOutId);
  }, [dispatch, query]);

  const onSearchWeather = locationId => {
    dispatch(getWeatherDetail(locationId));
  };

  const days = {
    0: 'Monday',
    1: 'Tuesday',
    2: 'Wednesday',
    3: 'Thursday',
    4: 'Friday',
  };

  const tempToFixed = num => parseFloat(num).toFixed(2);

  const weathersToDisplay = weathers =>
    weathers
      .map((weather, index) => {
        const min = get(weather, 'min_temp', '');
        const max = get(weather, 'max_temp', '');
        return {
          day: days[index] ? days[index] : '',
          name: get(weather, 'weather_state_name', ''),
          min: tempToFixed(min),
          max: tempToFixed(max),
        };
      })
      .filter(weather => weather.day);

  return (
    <div className={styles.layout}>
      <Title level={2}>Weather page</Title>
      <Row>
        <Col span={6} />
        <Col span={12}>
          <div className={styles['search-wrap']}>
            <AutoComplete
              className={styles.search}
              onSearch={onSearch}
              style={{ width: '100%' }}
            >
              <Input.Search
                className={styles.searchBtn}
                size="large"
                placeholder="Search a location"
                enterButton
              />
            </AutoComplete>
          </div>
          {!weatherDetail.length && query && (
            <div className={styles.results}>
              {locationList.length ? (
                <Spin spinning={isLoading}>
                  <List
                    header={
                      <Title level={3} type="success">
                        {`${locationList.length} location(s)`}
                      </Title>
                    }
                    footer={null}
                    bordered
                    dataSource={locationList}
                    renderItem={item => (
                      <List.Item
                        key={get(item, 'woeid', '')}
                        onClick={() => onSearchWeather(get(item, 'woeid', ''))}
                      >
                        <Typography.Text mark>{`[${query}]`}</Typography.Text>{' '}
                        {get(item, 'title', '')}
                      </List.Item>
                    )}
                  />
                </Spin>
              ) : (
                <Empty />
              )}
            </div>
          )}
        </Col>
        <Col span={6} />
      </Row>
      {weatherDetail.length > 0 && (
        <Row>
          <Col span={4} />
          <Col span={16}>
            <div className={styles.details}>
              <Title type="success" level={3}>
                {locationTitle}
              </Title>
              <List
                grid={{
                  gutter: 16,
                  column: weathersToDisplay(weatherDetail).length,
                }}
                dataSource={weathersToDisplay(weatherDetail)}
                renderItem={item => (
                  <List.Item>
                    <Card title={item.day}>
                      <h6>{item.name}</h6>
                      {item.min && <p>{`Min: ${item.min}`}</p>}
                      {item.max && <p>{`Max: ${item.max}`}</p>}
                    </Card>
                  </List.Item>
                )}
              />
            </div>
          </Col>
          <Col span={4} />
        </Row>
      )}
    </div>
  );
}

export default WeatherPage;
