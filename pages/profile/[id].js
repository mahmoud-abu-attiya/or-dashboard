import React from 'react'
import Sidebar from '../../layouts/Sidebar';
import Layout from '../../layouts/Layout';

export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  const paths = data.map((user) => {
    return {
      params: { id: user.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch("https://jsonplaceholder.typicode.com/users/" + id);
  const data = await res.json();

  return {
    props: { user: data },
  };
};

export default function Dashboard({ user }) {
  return (
    <>
      <div className="container-xxl">
        <Sidebar />
        <div className="content dashboard">
          <Layout>
            <div className="car">{user.name}</div>
          </Layout>
        </div>
      </div>
    </>
  );
}