PGDMP         5                z            test    14.4    14.4     �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            �           1262    16394    test    DATABASE     `   CREATE DATABASE test WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'English_India.1252';
    DROP DATABASE test;
                postgres    false            �            1259    16396    company_data    TABLE     �   CREATE TABLE public.company_data (
    id bigint NOT NULL,
    name character varying(255) NOT NULL,
    cin character varying(150) NOT NULL
);
     DROP TABLE public.company_data;
       public         heap    postgres    false            �            1259    16395    company_data_id_seq    SEQUENCE     |   CREATE SEQUENCE public.company_data_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 *   DROP SEQUENCE public.company_data_id_seq;
       public          postgres    false    210            �           0    0    company_data_id_seq    SEQUENCE OWNED BY     K   ALTER SEQUENCE public.company_data_id_seq OWNED BY public.company_data.id;
          public          postgres    false    209            \           2604    16399    company_data id    DEFAULT     r   ALTER TABLE ONLY public.company_data ALTER COLUMN id SET DEFAULT nextval('public.company_data_id_seq'::regclass);
 >   ALTER TABLE public.company_data ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    209    210    210            �          0    16396    company_data 
   TABLE DATA           5   COPY public.company_data (id, name, cin) FROM stdin;
    public          postgres    false    210   �
       �           0    0    company_data_id_seq    SEQUENCE SET     B   SELECT pg_catalog.setval('public.company_data_id_seq', 30, true);
          public          postgres    false    209            ^           2606    16401    company_data company_data_pkey 
   CONSTRAINT     \   ALTER TABLE ONLY public.company_data
    ADD CONSTRAINT company_data_pkey PRIMARY KEY (id);
 H   ALTER TABLE ONLY public.company_data DROP CONSTRAINT company_data_pkey;
       public            postgres    false    210            �      x������ � �     