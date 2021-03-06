/**
 *
 * The Bipio API Server
 *
 * @author Michael Pearson <michael@cloudspark.com.au>
 * Copyright (c) 2010-2013 CloudSpark pty ltd http://www.cloudspark.com.au
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 *
 * A Bipio Commercial OEM License may be obtained via enquiries@cloudspark.com.au
 */
var StatsAccountModel = require('./prototype.js').BipModel,
    StatsAccount = Object.create(StatsAccountModel);

StatsAccount.entityName = 'stats_account';
StatsAccount.entitySchema = {
    id: {
        type: String,
        renderable: false,
        writable: false
    },
    day: {   // day
        type: String,
        renderable: false,
        writable: false
    },
    owner_id : {
        type: String,
        renderable: false,
        writable: false
    },
    bips_total: {
        type: Number,
        renderable: true,
        writable: true,
        "default" : 0
    },
    share_total: {
        type: Number,
        renderable: true,
        writable: true,
        "default" : 0
    },
    channels_total: {
        type: Number,
        renderable: true,
        writable: true,
        "default" : 0
    },
    delivered_bip_inbound: {
        type: Number,
        renderable: true,
        writable: true,
        "default" : 0
    },
    delivered_channel_outbound : {
        type: Number,
        renderable: true,
        writable: true,
        "default" : 0
    },
    traffic_inbound_mb: {
        type: Number,
        renderable: true,
        writable: true,
        "default" : 0
    },
    traffic_outbound_mb: {
        type: Number,
        renderable: true,
        writable: true,
        "default" : 0
    }
};

StatsAccount.compoundKeyContraints = {
    owner_id : 1,
    day : 1,
    id : 1
};

module.exports.StatsAccount = StatsAccount;