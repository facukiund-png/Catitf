import { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '@/styles/GlobalStyles';
import { theme } from '@/styles/theme';
import { MainLayout } from '@/components/layout/MainLayout';
import { LoadingScreen } from '@/components/ui/LoadingScreen';
import { ScrollToAnchor } from '@/utils/helpers/ScrollToAnchor';

const HomePage = lazy(() => import('@/pages/home/Home'));
const InstitutionalPage = lazy(() => import('@/pages/institutional/Institutional'));
const DocumentationPage = lazy(() => import('@/pages/documentation/Documentation'));
const UnderConstructionPage = lazy(() => import('@/pages/underConstruction/UnderConstruction'));
const NotFoundPage = lazy(() => import('@/pages/notFound/NotFound'));

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <ScrollToAnchor />

        <Suspense fallback={<LoadingScreen />}>
          <Routes>
            <Route element={<MainLayout />}>
              <Route path="/" element={<HomePage />} />
              <Route path="/calendar" element={<UnderConstructionPage />} />
              <Route path="/schools" element={<UnderConstructionPage />} />
              <Route path="/results" element={<UnderConstructionPage />} />
              <Route path="/news-archive" element={<UnderConstructionPage />} />
              <Route path="/institutional" element={<InstitutionalPage />} />
              <Route path="/documentation" element={<DocumentationPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;