export const GA4_EVENTS = {
  form_start: { form_name: 'daftar_periksa' },
  form_step_complete: (step: number) => ({
    form_name: 'daftar_periksa',
    step,
    event_label: `step_${step}_complete`,
  }),
  form_submit: { form_name: 'daftar_periksa', value: 1 },
  form_error: (field: string, error: string) => ({
    form_name: 'daftar_periksa',
    error_field: field,
    error_type: error,
  }),
  cta_click: (location: string, text: string) => ({
    cta_location: location,
    cta_text: text,
  }),
  article_read: (title: string, readTime: number) => ({
    article_title: title,
    read_time_seconds: readTime,
  }),
  topic_view: (topic: string) => ({ topic_name: topic }),
  whatsapp_click: {},
  email_click: {},
  scroll_depth_25: {},
  scroll_depth_50: {},
  scroll_depth_75: {},
  scroll_depth_100: {},
};

export function trackGA4Event(eventName: string, params?: Record<string, any>) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, params);
  }
}

export function trackFormStart() {
  trackGA4Event('form_start', GA4_EVENTS.form_start);
}

export function trackFormStepComplete(step: number) {
  trackGA4Event('form_step_complete', GA4_EVENTS.form_step_complete(step));
}

export function trackFormSubmit() {
  trackGA4Event('form_submit', GA4_EVENTS.form_submit);
}

export function trackCTA(location: string, text: string) {
  trackGA4Event('cta_click', GA4_EVENTS.cta_click(location, text));
}
