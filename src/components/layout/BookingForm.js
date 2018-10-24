import React, { Component } from 'react';
import { FormGroup, FormLabel, Select } from './FormStyles';
import { Button } from '../common/';

class BookingForm extends Component {
  render() {
    return (
      <div>
        <form name="MAD booking form" method="POST">
          <FormGroup>
            <FormLabel htmlFor="groupType">
              Group Type
              <span className="required">*</span>
            </FormLabel>
            <Select id="groupType " name="groupType" required>
              <option value="School Group">School Group</option>
              <option value="Sport Group">Sport Group</option>
              <option value="Hens/Stag Party">Hens/Stag Party</option>
              <option value="Other">Other</option>
            </Select>
          </FormGroup>
          <FormGroup>
            <Button primary type="submit">
              Let's go
            </Button>
          </FormGroup>
        </form>
      </div>
    );
  }
}

export default BookingForm;
