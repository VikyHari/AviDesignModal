import { 
  Skeleton,
  Box
} from '@mui/material';

const DaaSSkeletonLoader = () => {



    return (
      <div className='min-h-screen w-full'>
        <Box sx={{ p: 3 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 4 }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Skeleton animation="wave" variant="circular" width={40} height={40} sx={{ mr: 2 }} />
            <Skeleton animation="wave" variant="text" width={180} height={40} />
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Skeleton animation="wave" variant="rectangular" width={120} height={40} />
            <Skeleton animation="wave" variant="rectangular" width={120} height={40} />
          </Box>
        </Box>

        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr 1fr' }, gap: 3, mb: 4 }}>
          {[1, 2, 3, 4].map((item) => (
            <Box key={item}>
              <Skeleton animation="wave" variant="rectangular" height={120} sx={{ borderRadius: 1 }} />
            </Box>
          ))}
        </Box>

        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 3, mb: 4 }}>
          {[1, 2].map((item) => (
            <Box key={item}>
              <Skeleton animation="wave" variant="rectangular" height={350} sx={{ borderRadius: 1 }} />
            </Box>
          ))}
        </Box>

        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 3, mb: 4 }}>
          {[1, 2].map((item) => (
            <Box key={item}>
              <Skeleton animation="wave" variant="rectangular" height={300} sx={{ borderRadius: 1 }} />
            </Box>
          ))}
        </Box>

        <Box>
          <Skeleton animation="wave" variant="text" width={200} height={40} sx={{ mb: 2 }} />
          <Skeleton animation="wave" variant="rectangular" height={400} sx={{ borderRadius: 1 }} />
        </Box>
      </Box>
      </div>
    );
  }


export default DaaSSkeletonLoader;