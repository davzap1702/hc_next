'use client';
import Swal from 'sweetalert2';

import React, { useState } from 'react';
import { Space, Spin } from 'antd';
import { TextField } from '@mui/material';
import { alerts } from '@/constants';


export const ContactForm = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
  });
  const [formAlerts, setFormAlerts] = useState({
    name: { error: false, label: '' },
    email: { error: false, label: '' },
    message: { error: false, label: '' },
  });

  const [loading, setLoading] = useState(false);

  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

  const setAlert = (field: string, value: string) => {
    setFormAlerts((prevState) => ({
      ...prevState,
      [field]: {
        error: true,
        label: value,
      },
    }));
  };

  const clearAlerts = (field: string) => {
    setFormAlerts((prevState) => ({
      ...prevState,
      [field]: {
        error: false,
        label: '',
      },
    }));
  };

  const submitHandler = async () => {
    //Validations
    if (!form.name) {
      setAlert('name', 'This field is required');

      return;
    }
    clearAlerts('name');
    if (!emailRegex.test(form.email)) {
      setAlert('email', 'Please enter a valid email address.');

      return;
    }
    clearAlerts('email');

    if (form.message.length < 10) {
      setAlert('message', 'Your message must be at least 10 character long.');

      return;
    }
    clearAlerts('message');

    setLoading(true);

    try {
      await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });

      setLoading(false);
      Swal.fire({
        allowOutsideClick: false,
        icon: 'success',
        title: 'Thank you!',
        text: 'We have received your message and will get back to you soon.',
      }).then(({ isConfirmed }) => {
        if (isConfirmed) {
          window.location.reload();
        }
      });
    } catch (error) {

      setLoading(false);

      return Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong! Please try again.',
      });

    }
  };
  const onChangeText = ({ target: { name, value } }: {target: {name: string, value: string}}) => {
    setForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    if (name === 'name') {
      if (value.length < 3) {
        setAlert(name, alerts[name]);
      } else {
        clearAlerts(name);
      }
    }
    if (name === 'email') {
      if (!emailRegex.test(value)) {
        setAlert(name, alerts[name]);
      } else {
        clearAlerts(name);
      }
    }
    if (name === 'message') {
      if (value.length < 30) {
        setAlert(name, alerts[name]);
      } else {
        clearAlerts(name);
      }
    }
  };

  return (
    <section style={{ marginBottom: '2rem' }}>
      <form className="contact-form" action="">
        <TextField
          autoComplete="name"
          required
          className="form_name"
          id="name"
          label="Name"
          variant="standard"
          value={form.name}
          onChange={onChangeText}
          name="name"
          error={formAlerts.name.error}
          helperText={formAlerts.name.label}
        />
        <TextField
          autoComplete="email"
          required
          type="email"
          className="form_name"
          id="email"
          label="Email"
          variant="standard"
          name="email"
          value={form.email}
          onChange={onChangeText}
          error={formAlerts.email.error}
          helperText={formAlerts.email.label}
        />
        <TextField
          autoComplete="phone"
          type="tel"
          className="form_name"
          id="phone"
          label="Phone"
          variant="standard"
          value={form.phone}
          name="phone"
          onChange={onChangeText}
        />
        <TextField
          autoComplete="off"
          className="form_name"
          id="company"
          label="Company"
          variant="standard"
          value={form.company}
          name="company"
          onChange={onChangeText}
        />
      </form>

      <div className="contact-form--cta container">
        <TextField
          rows={8}
          required
          multiline
          className="form_name"
          id="message"
          variant="filled"
          label="Your message"
          name="message"
          value={form.message}
          onChange={onChangeText}
          error={formAlerts.message.error}
          helperText={formAlerts.message.label}
        />
        {loading ? (
          <Space
            direction="vertical"
            style={{
              width: '100%',
            }}
          >
            <Spin tip="Sending" size="large">
              <div className="content" />
            </Spin>
          </Space>
        ) : (
          <button onClick={submitHandler} className="primary-btn">
              Send
          </button>
        )}
      </div>
    </section>
  );
};
