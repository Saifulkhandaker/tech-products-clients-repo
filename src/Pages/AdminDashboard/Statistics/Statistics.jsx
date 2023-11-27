import { PieChart, Pie, Cell, Legend, Label } from 'recharts';
import useProducts from '../../../hooks/useProducts';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import logo from "../../../assets/icons/logo.jpg"

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const RADIAN = Math.PI / 180;

const Statistics = () => {
  const [products] = useProducts();
  const axiosSecure = useAxiosSecure();
  const { data: users = [], refetch } = useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const res = await axiosSecure.get('/users');
      return res.data;
    },
  });

  const data = [
    { name: 'Products', value: products.length },
    { name: 'Users', value: users.length },
    { name: 'Reviews', value: 5 },
  ];

  const totalValue = data.reduce((acc, curr) => acc + curr.value, 0);

  return (
    <div>
      <div className='space-y-3 mt-8'>
        <img  src={logo} alt="" />
        <h1 className='text-sm md:text-lg lg:text-2xl'>Latest updates on Products, Users, And Reviews....</h1>
        </div>
      <div className="w-3/4 h-60 items-center flex justify-center mx-auto border border-slate-400 mt-10">
        <PieChart width={400} height={400}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Legend
            layout="vertical"
            align="right"
            verticalAlign="middle"
            content={() => (
              <div>
                {data.map((entry, index) => (
                  <div key={`legend-${index}`} style={{ display: 'flex', alignItems: 'center' }}>
                    <div
                      style={{
                        width: '25px',
                        height: '15px',
                        backgroundColor: COLORS[index % COLORS.length],
                        marginRight: '10px',
                      }}
                    ></div>
                    <p style={{ margin: '0', color: '#333' }}>
                      {entry.name}: {((entry.value / totalValue) * 100).toFixed(0)}%
                    </p>
                  </div>
                ))}
              </div>
            )}
          />
          <Label
            content={({ viewBox }) => {
              const { cx, cy } = viewBox;
              return (
                <text x={cx} y={cy} textAnchor="middle" dominantBaseline="middle" fontSize="16" fill="#333">
                  Statistics
                </text>
              );
            }}
          />
        </PieChart>
      </div>
    </div>
  );
};

export default Statistics;
