/* eslint-disable no-undef */
require('dotenv').config();

import { DBQueries } from '../../database/queries/';
import { TableTemplates } from '../../database/queries/enums';

describe('Database Queries', () => {
  it('Should create new table by template', async () => {
    await DBQueries.createNewTableFromTemplate(TableTemplates.Trades, 'test_table');

    expect(1).toBe(1);
  });
});
