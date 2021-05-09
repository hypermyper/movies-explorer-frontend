import React from "react";
import MoviesCard from '../MoviesCard/MoviesCard';
//import Preloader from "../Preloader/Preloader";

function MoviesCardList(props) {
    return (
			<>
        <section className="movies">
          {props.showSavedMovies ? (
            <>
              <MoviesCard
                name="Пятый элемент"
                duration="123 минуты"
                image="https://avatars.mds.yandex.net/get-kino-vod-films-gallery/34144/1c7397d3580632a8cdef559a5262a7d5/100x64_3"
                isSavedMovie={true}
              />
              <MoviesCard
                name="Фестиваль Рифкина"
                duration="88 минут"
                image="https://avatars.mds.yandex.net/get-kino-vod-films-gallery/34144/75d5239d41a3fbe5f56c6258228ad772/100x64_3"
                isSavedMovie={true}      
              />
            </>
          ) : 
          (
            <>
              <MoviesCard
                name="Пятый элемент"
                duration="123 минуты"
                image="https://avatars.mds.yandex.net/get-kino-vod-films-gallery/34144/1c7397d3580632a8cdef559a5262a7d5/100x64_3"
                isSavedMovieOn={true}
              />
              <MoviesCard
                name="Подземка"
                duration="104 минуты"
                image="https://avatars.mds.yandex.net/get-kino-vod-films-gallery/27707/325cb55b6245526b4d69475ea22d17c8/100x64_3"
               />
              <MoviesCard
                name="Поезд на Дарджилинг. Отчаянные путешественники"
                duration="92 минуты"
                image="https://avatars.mds.yandex.net/get-kino-vod-films-gallery/33804/b02688c7dcdbce1399e381c41df91111/100x64_3"
              />
              <MoviesCard
                name="Фестиваль Рифкина"
                duration="88 минут"
                image="https://avatars.mds.yandex.net/get-kino-vod-films-gallery/34144/75d5239d41a3fbe5f56c6258228ad772/100x64_3"
                isSavedMovieOn={true}      
              />
              <MoviesCard
                name="Капитан Фантастик"
                duration="118 минут"
                image="https://avatars.mds.yandex.net/get-kino-vod-films-gallery/34144/9c2130ebc02eb1566c6af1f5972d9b9b/100x64_3"
              />               
            </>
          )
          }
                 
        </section>
      </>
    );
}

export default MoviesCardList;	