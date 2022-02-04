import dayjs from 'dayjs';
import localizedFormat from 'dayjs/plugin/localizedFormat';

dayjs.extend(localizedFormat);

const index = async (req, res) => {
  if (req.method === 'GET') {
    res.json({ page: 'ok', date: dayjs().locale('es').format('LLLL') });
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
};

export default index;
