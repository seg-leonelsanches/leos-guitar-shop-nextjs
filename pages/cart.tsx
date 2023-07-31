import type { InferGetServerSidePropsType } from "next";
import Head from "next/head";
import Link from "next/link";

import { CartDetails } from "../components/cart";
import { useMobxStores } from "../data/stores";
import { fetcher } from "../infrastructure";
import { IGuitar } from "../models";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

const Cart = ({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const { cartStore } = useMobxStores();
  const { t, i18n } = useTranslation();
  
  const guitarCatalog: IGuitar[] = data;
  const cartItems = cartStore.guitars.map((g) => ({
    guitar: guitarCatalog.filter((gg) => gg.id === g.guitarId)[0],
    quantity: g.quantity,
  }));

  return (
    <>
      <Head>
        <title>{t('Cart.YourCart')} - Leo's Guitar Shop</title>
      </Head>
      <div className="container">
        <div className="row">
          <CartDetails cartItems={cartItems} />
        </div>
        {cartItems.length > 0 && (
          <div className="row my-5">
            <div className="col d-flex align-items-center justify-content-center">
              <Link href="/checkout" className="btn btn-warning btn-lg">
                {t('Cart.Checkout')}
              </Link>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export const getServerSideProps = async ({ locale }: { locale: any }) => {
  const res = await fetcher(
    `${process.env.BACKEND_URL || "http://localhost:3000"}/api/catalog`
  );
  const data: IGuitar[] = res;

  return {
    props: {
      data,
      ...(await serverSideTranslations(locale, ["common", "footer"])),
    },
  };
};

export default Cart;
