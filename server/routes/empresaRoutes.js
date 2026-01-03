router.get(
    '/me',
    authMiddleware,
    roleMiddleware('tutor_empresa'),
    empresaController.getEmpresa
  );
  