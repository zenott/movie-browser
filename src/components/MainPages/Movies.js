import React, { Component } from 'react';
import { Container, Row, Col } from 'mdbreact';
import { connect } from 'react-redux';
import { fetchLists } from '../../redux/actions';
import SwiperMulti from '../Swiper/SwiperMulti';
import SearchForm from '../Search/SearchForm';
import { bg, hr } from '../Style/style.module.css';

class Movies extends Component {
  componentDidMount() {
    const {
      popularMovie,
      topRatedMovie,
      nowPlayingMovie,
      upcomingMovie,
      fetchLists,
    } = this.props;
    fetchLists({
      popularMovie,
      topRatedMovie,
      nowPlayingMovie,
      upcomingMovie,
    });
  }

  render() {
    const {
      popularMovie,
      topRatedMovie,
      nowPlayingMovie,
      upcomingMovie,
      listsIsLoading,
      listsError,
    } = this.props;

    if (listsError) {
      return <p>{listsError.message}</p>;
    }

    if (listsIsLoading) {
      return <p>Loading ...</p>;
    }

    return (
      <div className={bg}>
        <Container className="text-white">
          <Row>
            <Col size="9" className="d-flex align-items-center">
              <h2 className="mb-0">Now Playing</h2>
            </Col>
            <Col size="3">
              <SearchForm type="movie" />
            </Col>
          </Row>
          <SwiperMulti movies={nowPlayingMovie} />
          <hr className={`my-4 ${hr}`} />
          <h2 className="mb-4">Popular</h2>
          <SwiperMulti movies={popularMovie} />
          <hr className={`my-4 ${hr}`} />
          <h2 className="mb-4">Top Rated</h2>
          <SwiperMulti movies={topRatedMovie} />
          <hr className={`my-4 ${hr}`} />
          <h2 className="mb-4">Upcoming</h2>
          <SwiperMulti movies={upcomingMovie} />
        </Container>
      </div>
    );
  }
}

const mapStateToProps = ({
  lists: { popularMovie, topRatedMovie, nowPlayingMovie, upcomingMovie },
  listsIsLoading,
  listsError,
}) => ({
  popularMovie,
  topRatedMovie,
  nowPlayingMovie,
  upcomingMovie,
  listsIsLoading,
  listsError,
});

export default connect(
  mapStateToProps,
  { fetchLists }
)(Movies);
