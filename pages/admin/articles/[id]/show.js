import { useState, useEffect } from 'react';
import axios from 'axios';
import moment from 'moment';
import 'moment/locale/mn';
import styles from '../article.module.css';
import Link from 'next/link';
import Layout from '../../../../components/Layout';
export const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

export async function getServerSideProps(context) {
  const { id } = context.params;
  return { props: { id } };
}

function ArticleDetail(props) {
  const { id } = props;
  const [article, setArticle] = useState({});
  const [loading, setLoading] = useState(false);

  function fetchArticle() {
    setLoading(true);
    axios
      .get(`${BACKEND_URL}/posts/${id}`)
      .then((res) => setArticle(res.data))
      .finally(() => setLoading(false));
  }

  useEffect(() => {
    fetchArticle();
  }, [id]);

  if (loading) {
    return (
      <section className="mt-5">
        <h3 className={styles.create__header}>Нийтлэл</h3>
        <section
          className={`${styles.create__container} bg-white rounded-lg mt-3 mr-5 p-6`}
        >
          Өгөгдөл татаж байна ...
        </section>
      </section>
    );
  }

  return (
    <section className="mt-5">
      {/* {console.log(article)} */}
      <h3 className={styles.create__header}>Нийтлэл</h3>
      <section
        className={`${styles.create__container} bg-white rounded-lg mt-3 mr-5 p-6`}
      >
        {/* 1px solid #CBD5E1 */}
        <section className="w-full">
          <p>Гарчиг</p>
          <p className={`${styles.create__input_text} mt-2`}>
            {article?.title || ''}
          </p>
        </section>
        <section className="w-full mt-5">
          <p>Агуулга</p>
          <p className={`${styles.create__input_text} mt-2`}>
            {article?.description || ''}
          </p>
        </section>
        <section className="w-full mt-5">
          <p>Таг</p>
          <div className="w-2/3">
            <p className={`${styles.create__input_text} mt-2`}>
              {article?.tag || 'Хоосон байна'}
            </p>
          </div>
        </section>
        <section className="w-full mt-5">
          <p>Зураг</p>
          <img src={article?.image || ''} alt="" className="w-1/2 h-50 mt-2" />
        </section>
        <section className="mt-3 flex w-full justify-between">
          <section>
            <p>Үүсгэсэн огноо</p>
            <p className={`${styles.create__input_text} mt-1`}>
              {moment(article?.createdAt || '').format('YYYY.MM.DD hh:mm:ss')}
            </p>
          </section>
          <section>
            <p>Зассан огноо</p>
            <p className={`${styles.create__input_text} mt-1`}>
              {moment(article?.updatedAt || '').format('YYYY.MM.DD hh:mm:ss')}
            </p>
          </section>
        </section>
        <section className="w-full mt-5">
          <p>Статус</p>
          {/* <p className={`${styles.create__input_text} mt-2`}>
            {article?.status || ''}
          </p> */}
          <section className="w-2/3 mt-2">
            <section className="border border-[#CBD5E1] w-2/3 outline-none px-2 py-1 rounded">
              <select
                name="status"
                value={article.status}
                className="w-full border-none outline-none"
                disabled
              >
                <option value="published">Нийтлэх</option>
                <option value="unpublished">Нийтлэхгүй</option>
              </select>
            </section>
          </section>
        </section>
      </section>
      <Link href={`/admin/articles/${id}/edit`}>
        <div className="flex">
          <div type="button" className="btn mt-10">
            Засах
          </div>
        </div>
      </Link>
      <div className="h-10" />
    </section>
  );
}

ArticleDetail.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default ArticleDetail;
