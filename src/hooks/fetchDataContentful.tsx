import { useState, useEffect } from "react";
import { createClient } from "contentful";

const client = createClient({
  space: "3587efa5a65l",
  accessToken: "cjhc4D6ezmPGYANVyyrtpeYSsBr8_cx8kLI2Qxjz5Bc",
});

export function useFetchDataContentfulHP(skip: number, limit: number) {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setLoading(true);
    client
      .getEntries({
        content_type: "i3ReactTest",
        skip: skip,
        limit: limit,
      })
      .then((response) => {
        setData(convertData(response.items));
        setTotal(response.total);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, [skip, limit]);

  return { loading, data, error, totalItems: total };
}

const convertData = (data: any) => {
  return data.map((item: any) => {
    return {
      id: item.sys.id,
      name: item.fields.name,
      percentage: item.fields.percentage,
      image: item.fields.picture?.fields?.file?.url,
    };
  });
};

export function useFetchDataContentful2Page() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({
    id: "",
    title: "",
    titleImage: "",
    firstText: {},
  });
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    client
      .getEntries({
        content_type: "i3ReactTest2Page",
      })
      .then((response) => {
        setData(convertData2Page(response.items));
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  return { loading, data, error };
}

const convertData2Page = (data: any) => {
  return {
    id: data[0].sys.id,
    title: data[0].fields.title,
    titleImage: data[0].fields.titleImage?.fields?.file?.url,
    firstText: data[0].fields.firstText,
  };
};

export function useFetchDataContentful2PageIncluded() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([
    {
      id: "",
      image: "",
      includedContent: {},
    },
  ]);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    client
      .getEntries({
        content_type: "i3ReactTest2PageInclude",
      })
      .then((response) => {
        setData(convertData2PageIncluded(response.items));
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  return { loading, data, error };
}

const convertData2PageIncluded = (data: any) => {
  return data.map((item: any) => {
    return {
      id: item.sys.id,
      image: item.fields.image?.fields?.file?.url,
      includedContent: item.fields.includedContent,
    };
  });
};
