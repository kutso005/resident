import React, { useEffect, useState } from "react";
import {
  Route,
  Routes,
  useLocation,
  Navigate,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import Main from "./components/Main/Main";
import Head from "./components/Header/Head";
import Header from "./components/Header/Header";
import Luxury from "./pages/Luxury/Luxury";
import Contacts from "./pages/RouterApp/Contacts";
import AllDetail from "./pages/Detail/AllDetail";
import { api, get } from "./api/api";
import HeaderDerail from "./pages/Detail/HeaderDerail";
import SubCat from "./pages/Detail/SubCat";
import Us from "./pages/RouterApp/Us";
import TabsSeach from "./pages/Post/TabsSeach";
import Footer from "./components/Section/Footer";

const App = () => {
  const [residentList, setResidentList] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [popularList, setPopularList] = useState([]);
  const [banner, setBanner] = useState([]);
  const [header, setHeader] = useState([]);

  const lang = localStorage.getItem("lang") || "ru";
  const location = useLocation();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const handleScroll = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    handleScroll();
  }, [location]);

  const updateSearchParams = (searchQuery) => {
    if (searchQuery.trim() === "") {
      setSearchParams({});
    } else {
      setSearchParams({ search: searchQuery });
    }
  };

  useEffect(() => {
    if (location.pathname === `/${lang}`) {
      updateSearchParams(searchInput);
    }
  }, [searchInput, lang, location.pathname]);

  useEffect(() => {
    if (lang) {
      api.get(`/${lang}/list/status`).then((response) => {
        setResidentList(response.data);
      });
    }
  }, [lang]);

  useEffect(() => {
    api.get(`/baner`).then((response) => {
      setBanner(response.data);
    });
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const residents = await get.getHeader();
      setHeader(residents);
    };
    fetchData();
  }, []);

  return (
    <div>
      <Header header={header} banner={banner} />
      <Head
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        header={header}
      />
      <Routes>
        <Route path="/" element={<Navigate to={`/${lang}`} />} />
        <Route
          path={`/${lang}`}
          element={
            <Main
              residentList={residentList}
              searchInput={searchInput}
              popularList={popularList}
              banner={banner}
            />
          }
        />
        <Route
          path={`/${lang}/luxury-holiday`}
          element={<Luxury residentList={residentList} />}
        />
        <Route
          path={`/${lang}/news/:slug`}
          element={
            <AllDetail
              searchInput={searchInput}
              residentList={residentList}
              setSearchInput={setSearchInput}
            />
          }
        />
        <Route path={`/${lang}/contacts`} element={<Contacts />} />
        <Route
          path={`/${lang}/category/:slug`}
          element={
            <HeaderDerail
              residentList={residentList}
              searchInput={searchInput}
            />
          }
        />
        <Route
          path={`/${lang}/categories/:slug`}
          element={<SubCat searchInput={searchInput} />}
        />
        <Route path={`/${lang}/about-us`} element={<Us />} />
        <Route
          path={`/${lang}/tags/:name`}
          element={
            <TabsSeach residentList={residentList} searchInput={searchInput} />
          }
        />
      </Routes>
      <Footer residentList={residentList} />
    </div>
  );
};

export default App;
